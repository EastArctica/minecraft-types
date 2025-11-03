#Requires -Version 5.1
<#
.SYNOPSIS
  Generate TypeScript definitions from JDK jmods and create npm package scaffolding.

.DESCRIPTION
  - Scans for JDK installs that have a 'jmods' directory.
  - Prompts the user to choose a JDK.
  - For each *.jmod, runs:
      java -jar .\Jar2TypescriptDeclarationFileV2-1.0-SNAPSHOT.jar -i <JMOD> -o "D:\@minecraft-types\<name>\index.d.ts"
  - Writes package.json, LICENSE, README.md for each module package.

.NOTES
  Run this script from the same directory as the converter JAR.
#>

param(
    # Path to the converter JAR (downloads latest from GitHub if not provided)
    [string]$JarPath = "",

    # Output root for all generated packages
    [string]$OutRoot = "D:\@minecraft-types",

    # Optional: if you already know which JDK root to use, pass it here to skip selection
    [string]$JdkHome,
    # Optional: if set, run `pnpm run publish` in each generated package directory
    [switch]$Publish,
    # Package version to use in generated package.json files
    [string]$PackageVersion = "1.0.0"
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

function Write-Info($msg) { Write-Host "[*] $msg" -ForegroundColor Cyan }
function Write-Warn($msg) { Write-Host "[!] $msg" -ForegroundColor Yellow }
function Write-Err($msg) { Write-Host "[x] $msg" -ForegroundColor Red }

function Test-Jdk([string]$path) {
    if (-not $path) { return $false }
    $jmods = Join-Path $path "jmods"
    $java = Join-Path $path "bin\java.exe"
    (Test-Path $jmods -PathType Container) -and (Test-Path $java -PathType Leaf)
}

function Find-JdkHomes {
    $candidates = New-Object System.Collections.Generic.HashSet[string] ([StringComparer]::OrdinalIgnoreCase)

    $envPaths = @(
        $env:JAVA_HOME,
        $env:JDK_HOME
    ) | Where-Object { $_ -and (Test-Path $_) }

    foreach ($p in $envPaths) { [void]$candidates.Add((Resolve-Path $p).Path) }

    $roots = @(
        "$env:ProgramFiles\Java",
        "$env:ProgramFiles\Microsoft\jdk",
        "$env:ProgramFiles\AdoptOpenJDK",
        "$env:ProgramFiles\Eclipse Adoptium\",
        "$env:ProgramFiles\OpenJDK",
        "$env:ProgramFiles\Zulu\zulu-*" ,

        "$env:ProgramFiles(x86)\Java",
        "$env:ProgramFiles(x86)\Microsoft\jdk",
        "$env:ProgramFiles(x86)\AdoptOpenJDK",

        "$env:USERPROFILE\scoop\apps\openjdk\current",
        "$env:USERPROFILE\scoop\apps\temurin\current",
        "$env:USERPROFILE\.jdks",

        "$env:ChocolateyInstall\lib\openjdk*\tools",
        "$env:ChocolateyInstall\lib\temurin*\tools"
    ) | Where-Object { $_ }

    foreach ($root in $roots) {
        Get-ChildItem -Path $root -Directory -ErrorAction SilentlyContinue | ForEach-Object {
            [void]$candidates.Add($_.FullName)
        }
    }

    # Also catch direct roots themselves if they’re an actual JDK
    foreach ($root in $roots) {
        if (Test-Path $root) { [void]$candidates.Add((Resolve-Path $root).Path) }
    }

    $jdks = @()
    foreach ($c in $candidates) {
        if (Test-Jdk $c) { $jdks += $c }
    }

    # De-dupe on resolved path and prefer more specific versioned dirs (sort by length desc)
    $jdks | Sort-Object { $_.Length } -Descending -Unique
}

function Get-JdkVersion([string]$jdkHome) {
    # Prefer JDK 'release' file
    $releaseFile = Join-Path $jdkHome "release"
    if (Test-Path $releaseFile) {
        $content = Get-Content -Raw -Path $releaseFile
        if ($content -match 'JAVA_VERSION="([^"]+)"') {
            return $Matches[1]
        }
    }
    # Fallback: run java -version
    $javaExe = Join-Path $jdkHome "bin\java.exe"
    if (Test-Path $javaExe) {
        $p = Start-Process -FilePath $javaExe -ArgumentList "-version" -NoNewWindow -RedirectStandardError Temp:\ver.txt -PassThru
        $p.WaitForExit()
        $verOut = Get-Content Temp:\ver.txt -Raw
        if ($verOut -match 'version "([^"]+)"') { return $Matches[1] }
    }
    return "unknown"
}

function Prompt-SelectJdk([string[]]$jdks) {
    Write-Host ""
    Write-Info "Found the following JDKs (with jmods):"
    for ($i = 0; $i -lt $jdks.Count; $i++) {
        $v = Get-JdkVersion $jdks[$i]
        Write-Host ("[{0}] {1} (JDK {2})" -f ($i + 1), $jdks[$i], $v)
    }
    Write-Host ""
    do {
        $sel = Read-Host "Select a JDK by number"
        $ok = [int]::TryParse($sel, [ref]$null) -and ($sel -as [int]) -ge 1 -and ($sel -as [int]) -le $jdks.Count
        if (-not $ok) { Write-Warn "Invalid selection." }
    } while (-not $ok)
    $jdks[([int]$sel - 1)]
}

function Ensure-Dir([string]$path) {
    if (-not (Test-Path $path)) {
        New-Item -ItemType Directory -Path $path | Out-Null
    }
}

function Write-License([string]$path) {
    @"
Creative Commons Legal Code

CC0 1.0 Universal

    CREATIVE COMMONS CORPORATION IS NOT A LAW FIRM AND DOES NOT PROVIDE
    LEGAL SERVICES. DISTRIBUTION OF THIS DOCUMENT DOES NOT CREATE AN
    ATTORNEY-CLIENT RELATIONSHIP. CREATIVE COMMONS PROVIDES THIS
    INFORMATION ON AN "AS-IS" BASIS. CREATIVE COMMONS MAKES NO WARRANTIES
    REGARDING THE USE OF THIS DOCUMENT OR THE INFORMATION OR WORKS
    PROVIDED HEREUNDER, AND DISCLAIMS LIABILITY FOR DAMAGES RESULTING FROM
    THE USE OF THIS DOCUMENT OR THE INFORMATION OR WORKS PROVIDED
    HEREUNDER.

Statement of Purpose

The laws of most jurisdictions throughout the world automatically confer
exclusive Copyright and Related Rights (defined below) upon the creator
and subsequent owner(s) (each and all, an \"owner\") of an original work of
authorship and/or a database (each, a \"Work\").

Certain owners wish to permanently relinquish those rights to a Work for
the purpose of contributing to a commons of creative, cultural and
scientific works (\"Commons\") that the public can reliably and without fear
of later claims of infringement build upon, modify, incorporate in other
works, reuse and redistribute as freely as possible in any form whatsoever
and for any purposes, including without limitation commercial purposes.
These owners may contribute to the Commons to promote the ideal of a free
culture and the further production of creative, cultural and scientific
works, or to gain reputation or greater distribution for their Work in
part through the use and efforts of others.

For these and/or other purposes and motivations, and without any
expectation of additional consideration or compensation, the person
associating CC0 with a Work (the \"Affirmer\"), to the extent that he or she
is an owner of Copyright and Related Rights in the Work, voluntarily
elects to apply CC0 to the Work and publicly distribute the Work under its
terms, with knowledge of his or her Copyright and Related Rights in the
Work and the meaning and intended legal effect of CC0 on those rights.

1. Copyright and Related Rights. A Work made available under CC0 may be
protected by copyright and related or neighboring rights (\"Copyright and
Related Rights\"). Copyright and Related Rights include, but are not
limited to, the following:

  i. the right to reproduce, adapt, distribute, perform, display,
     communicate, and translate a Work;
 ii. moral rights retained by the original author(s) and/or performer(s);
iii. publicity and privacy rights pertaining to a person's image or
     likeness depicted in a Work;
 iv. rights protecting against unfair competition in regards to a Work,
     subject to the limitations in paragraph 4(a), below;
  v. rights protecting the extraction, dissemination, use and reuse of data
     in a Work;
 vi. database rights (such as those arising under Directive 96/9/EC of the
     European Parliament and of the Council of 11 March 1996 on the legal
     protection of databases, and under any national implementation
     thereof, including any amended or successor version of such
     directive); and
vii. other similar, equivalent or corresponding rights throughout the
     world based on applicable law or treaty, and any national
     implementations thereof.

2. Waiver. To the greatest extent permitted by, but not in contravention
of, applicable law, Affirmer hereby overtly, fully, permanently,
irrevocably and unconditionally waives, abandons, and surrenders all of
Affirmer's Copyright and Related Rights and associated claims and causes
of action, whether now known or unknown (including existing as well as
future claims and causes of action), in the Work (i) in all territories
worldwide, (ii) for the maximum duration provided by applicable law or
treaty (including future time extensions), (iii) in any current or future
medium and for any number of copies, and (iv) for any purpose whatsoever,
including without limitation commercial, advertising or promotional
purposes (the \"Waiver\"). Affirmer makes the Waiver for the benefit of each
member of the public at large and to the detriment of Affirmer's heirs and
successors, fully intending that such Waiver shall not be subject to
revocation, rescission, cancellation, termination, or any other legal or
equitable action to disrupt the quiet enjoyment of the Work by the public
as contemplated by Affirmer's express Statement of Purpose.

3. Public License Fallback. Should any part of the Waiver for any reason
be judged legally invalid or ineffective under applicable law, then the
Waiver shall be preserved to the maximum extent permitted taking into
account Affirmer's express Statement of Purpose. In addition, to the
extent the Waiver is so judged Affirmer hereby grants to each affected
person a royalty-free, non transferable, non sublicensable, non exclusive,
irrevocable and unconditional license to exercise Affirmer's Copyright and
Related Rights in the Work (i) in all territories worldwide, (ii) for the
maximum duration provided by applicable law or treaty (including future
time extensions), (iii) in any current or future medium and for any number
of copies, and (iv) for any purpose whatsoever, including without
limitation commercial, advertising or promotional purposes (the
\"License\"). The License shall be deemed effective as of the date CC0 was
applied by Affirmer to the Work. Should any part of the License for any
reason be judged legally invalid or ineffective under applicable law, such
partial invalidity or ineffectiveness shall not invalidate the remainder
of the License, and in such case Affirmer hereby affirms that he or she
will not (i) exercise any of his or her remaining Copyright and Related
Rights in the Work or (ii) assert any associated claims and causes of
action with respect to the Work, in either case contrary to Affirmer's
express Statement of Purpose.

4. Limitations and Disclaimers.

 a. No trademark or patent rights held by Affirmer are waived, abandoned,
    surrendered, licensed or otherwise affected by this document.
 b. Affirmer offers the Work as-is and makes no representations or
    warranties of any kind concerning the Work, express, implied,
    statutory or otherwise, including without limitation warranties of
    title, merchantability, fitness for a particular purpose, non
    infringement, or the absence of latent or other defects, accuracy, or
    the present or absence of errors, whether or not discoverable, all to
    the greatest extent permissible under applicable law.
 c. Affirmer disclaims responsibility for clearing rights of other persons
    that may apply to the Work or any use thereof, including without
    limitation any person's Copyright and Related Rights in the Work.
    Further, Affirmer disclaims responsibility for obtaining any necessary
    consents, permissions or other rights required for any use of the
    Work.
 d. Affirmer understands and acknowledges that Creative Commons is not a
    party to this document and has no duty or obligation with respect to
    this CC0 or use of the Work.
"@ | Set-Content -NoNewline -Encoding UTF8 -Path $path
}

function Write-Readme([string]$path, [string]$moduleName, [string]$jdkVersion) {
    @"
# @minecraft-types/$moduleName

TypeScript type definitions for the JVM ``$moduleName`` module (JDK $jdkVersion).

## Install

Install from npm or pnpm:

``````bash
npm install @minecraft-types/$moduleName
# or
pnpm add @minecraft-types/$moduleName
``````

## Setup
In your ``tsconfig.json``, add the following to the ``compilerOptions`` section:

``````json
{
  "compilerOptions": {
    "types": [
      "@minecraft-types/$moduleName"
    ]
  }
}
``````

Note: adding the ``types`` array explicitly tells TypeScript which global type packages to include. When you set ``compilerOptions.types`` it will only include the packages listed there and will not automatically include other ``@types/*`` packages (for example ``node``). If you need other ambient types, add them to the array as well or consider using ``typeRoots`` or a project ``global.d.ts`` instead.

## Using the types and handling globals

By default, this will expose the types under the ``Packages`` namespace (ex. ``Packages.java.io.BufferedInputStream``).

If you work in an environment where the global namespace is polluted differently with Java types, you can re-namespace the types by creating a ``global.d.ts`` file in your project with the following content:

``````ts
// global.d.ts
declare global {
  const java: typeof Packages.java;
  // Add other root namespaces as needed (e.g., javax, com, org, etc.)
  // const com: typeof Packages.com;

  // If your environment exposes something other than 'Packages', you can alias it here
  // const SomeOtherPackages: typeof Packages;
}

export {}; // keep file a module so TS merges properly
``````

If instead, you'd prefer to only pollute the global namespace within that file, you can add the following to your typescript files:
``````ts
declare const java: typeof Packages.java;
// Add other root namespaces as needed (e.g., javax, com, org, etc.)
// declare const com: typeof Packages.com;

// If your environment exposes something other than 'Packages', you can alias it here
// declare const SomeOtherPackages: typeof Packages;
``````

## Examples

- Referencing a Java type directly from the ambient ``Packages`` types:

``````ts
// Uses the package name as exposed by the types
type BIS = Packages.java.io.BufferedInputStream;

declare const inStream: BIS;
``````

- Using the ``java`` alias from the ``global.d.ts`` example:

``````ts
const s: string = java.lang.String.valueOf(123);
``````

## License

[CC0-1.0](https://creativecommons.org/publicdomain/zero/1.0/)
"@ | Set-Content -Encoding UTF8 -Path $path
}

function Write-PackageJson([string]$path, [string]$moduleName, [string]$rawJmodName, [string]$jdkVersion) {
    @"
{
  "name": "@minecraft-types/$moduleName",
  "version": "$PackageVersion",
  "description": "Typescript definitions for $rawJmodName from JDK $jdkVersion.",
  "homepage": "https://github.com/EastArctica/minecraft-types#readme",
  "bugs": {
    "url": "https://github.com/EastArctica/minecraft-types/issues"
  },
  "license": "CC0-1.0",
  "author": {
    "name": "East_Arctica",
    "url": "https://github.com/EastArctica"
  },
  "files": [
    "README.md",
    "LICENSE",
    "index.d.ts"
  ],
  "repository": {
    "type": "git",
    "url": "https://github.com/EastArctica/minecraft-types.git",
    "directory": "$moduleName/"
  },
  "types": "index.d.ts"
}
"@ | Set-Content -Encoding UTF8 -Path $path
}

# Validate prerequisites
if (-not (Test-Path $JarPath -PathType Leaf)) {
    if (-not $JarPath) {
        # Query all releases and pick the most recent release that has a matching JAR asset
        Write-Info "No JAR path provided. Searching GitHub releases for converter JAR..."
        $releasesApiUrl = "https://api.github.com/repos/EastArctica/Jar2TypescriptDeclarationFileV2/releases"
        try {
            $releases = Invoke-RestMethod -Uri $releasesApiUrl -UseBasicParsing
            if (-not $releases) {
                Write-Err "No releases found on GitHub."
                exit 1
            }

            $asset = $null
            foreach ($rel in $releases | Sort-Object { [datetime]$_.published_at } -Descending) {
                $asset = $rel.assets | Where-Object { $_.name -like "Jar2TypescriptDeclarationFileV2-*.jar" } | Select-Object -First 1
                if ($asset) { break }
            }

            if (-not $asset) {
                Write-Err "No suitable JAR asset found in repository releases."
                exit 1
            }

            $downloadUrl = $asset.browser_download_url
            $JarPath = Join-Path -Path (Get-Location).Path -ChildPath $asset.name
            Write-Info ("Downloading {0} to {1}..." -f $downloadUrl, $JarPath)
            Invoke-WebRequest -Uri $downloadUrl -OutFile $JarPath -UseBasicParsing
            Write-Info "Download complete."
        }
        catch {
            Write-Err ("Failed to download converter JAR from GitHub: {0}" -f $_.Exception.Message)
            exit 1
        }
    }
    else {
        Write-Err ("Converter JAR not found at specified path: {0}" -f $JarPath)
        exit 1
    }
}

Ensure-Dir -path $OutRoot

# Determine JDK
if (-not $JdkHome) {
    $jdks = Find-JdkHomes
    if (-not $jdks -or $jdks.Count -eq 0) {
        Write-Err "No JDK installs with a 'jmods' folder were found."
        exit 1
    }
    $JdkHome = Prompt-SelectJdk $jdks
}
else {
    if (-not (Test-Jdk $JdkHome)) {
        Write-Err "Provided JdkHome isn't a valid JDK with jmods: $JdkHome"
        exit 1
    }
}

Write-Info ("Using JDK: {0}" -f $JdkHome)
$jdkVersion = Get-JdkVersion $JdkHome
$jmodsDir = Join-Path $JdkHome "jmods"
$javaExe = Join-Path $JdkHome "bin\java.exe"

# Enumerate jmods
$jmods = Get-ChildItem -Path $jmodsDir -Filter *.jmod -File | Sort-Object Name
if (-not $jmods -or $jmods.Count -eq 0) {
    Write-Err "No .jmod files found under: $jmodsDir"
    exit 1
}

Write-Info ("Found {0} jmod(s)." -f $jmods.Count)

# Process each jmod
foreach ($j in $jmods) {
    $rawName = [System.IO.Path]::GetFileNameWithoutExtension($j.Name)  # e.g., java.base
    # npm package names should be lowercase; dots are allowed in scoped names
    $pkgName = $rawName.ToLowerInvariant()

    $pkgDir = Join-Path $OutRoot $pkgName
    Ensure-Dir $pkgDir

    $outFile = Join-Path $pkgDir "index.d.ts"

    Write-Info "Generating types for '$rawName' -> $outFile"

    # Run the converter
    & $javaExe -jar (Resolve-Path $JarPath).Path -i $j.FullName -o $outFile -p Packages
    if ($LASTEXITCODE -ne 0) {
        Write-Warn "Converter failed for $($j.Name) with exit code $LASTEXITCODE. Skipping package files."
        continue
    }

    # Package files
    Write-PackageJson -path (Join-Path $pkgDir "package.json") -moduleName $pkgName -rawJmodName $rawName -jdkVersion $jdkVersion
    Write-License     -path (Join-Path $pkgDir "LICENSE")
    Write-Readme      -path (Join-Path $pkgDir "README.md") -moduleName $pkgName -jdkVersion $jdkVersion
    
    # Optionally publish the package using pnpm
    if ($Publish) {
        Write-Info "Publishing package '@minecraft-types/$pkgName'..."
        Push-Location $pkgDir
        try {
            & pnpm publish -r --no-git-checks
            $pubExit = $LASTEXITCODE
            if ($pubExit -ne 0) {
                Write-Warn "pnpm publish failed for $pkgName (exit $pubExit)."
            }
            else {
                Write-Info "Published @minecraft-types/$pkgName successfully."
            }
        }
        catch {
            Write-Warn "Error running pnpm for $pkgName $_"
        }
        finally {
            Pop-Location
        }
    }
}

Write-Host ""
Write-Info "Done. Packages written under: $OutRoot"

