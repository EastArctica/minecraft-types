#Requires -Version 5.1
<#
.SYNOPSIS
  Generate TypeScript declaration files from Yarn named JARs.

.DESCRIPTION
  Recursively scans a root directory for Yarn build folders containing
  named JARs and runs the Jar2TypescriptDeclarationFile converter to
  produce matching index.d.ts files. Provides automatic discovery or
  download of the converter JAR, optional overwrite semantics, and
  colored progress logging.

.PARAMETER JarPath
  Optional path to the Jar2TypescriptDeclarationFile converter. If not
  provided the script searches the current directory and falls back to
  downloading the most recent release from GitHub.

.PARAMETER Root
  Root directory to scan. Defaults to the current working directory.

.PARAMETER JavaPath
  Path to the java executable to use. Defaults to the first java found on
  the PATH.

.PARAMETER Force
  Overwrite existing index.d.ts files instead of skipping them.

.PARAMETER DryRun
  Report actions without invoking the converter.
#>

[CmdletBinding()]
param(
    [string]$JarPath = "",
    [string]$Root = (Get-Location).Path,
    [string]$JavaPath = "",
    [switch]$Force,
    [switch]$DryRun
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

function Write-Info([string]$Message) { Write-Host "[*] $Message" -ForegroundColor Cyan }
function Write-Warn([string]$Message) { Write-Host "[!] $Message" -ForegroundColor Yellow }
function Write-Err([string]$Message)  { Write-Host "[x] $Message" -ForegroundColor Red }

function Get-RelativePath {
    param(
        [Parameter(Mandatory = $true)][string]$BasePath,
        [Parameter(Mandatory = $true)][string]$TargetPath
    )

    $baseFull = [System.IO.Path]::GetFullPath($BasePath)
    $targetFull = [System.IO.Path]::GetFullPath($TargetPath)

    $separator = [System.IO.Path]::DirectorySeparatorChar
    $normalizedBase = $baseFull.TrimEnd($separator, [System.IO.Path]::AltDirectorySeparatorChar) + $separator

    $baseUri = New-Object System.Uri $normalizedBase
    $targetUri = New-Object System.Uri $targetFull
    $relative = $baseUri.MakeRelativeUri($targetUri).ToString()
    return [System.Uri]::UnescapeDataString($relative).Replace('/', $separator)
}

function Resolve-ToolJar {
    param([string]$Candidate)

    if ($Candidate) {
        if (-not (Test-Path -LiteralPath $Candidate -PathType Leaf)) {
            Write-Err ("Converter JAR not found at specified path: {0}" -f $Candidate)
            exit 1
        }
        return (Resolve-Path $Candidate).Path
    }

    $localMatch = Get-ChildItem -Path (Get-Location) -Filter 'Jar2TypescriptDeclarationFileV2-*.jar' -File -ErrorAction SilentlyContinue |
        Sort-Object LastWriteTime -Descending |
        Select-Object -First 1
    if ($localMatch) { return (Resolve-Path $localMatch.FullName).Path }

    $defaultName = 'Jar2TypescriptDeclarationFileV2-1.0-SNAPSHOT.jar'
    $defaultPath = Join-Path (Get-Location) $defaultName
    if (Test-Path -LiteralPath $defaultPath -PathType Leaf) { return (Resolve-Path $defaultPath).Path }

    Write-Info "No converter JAR found locally. Downloading latest release..."
    $releasesApiUrl = "https://api.github.com/repos/EastArctica/Jar2TypescriptDeclarationFileV2/releases"

    try {
        $releases = Invoke-RestMethod -Uri $releasesApiUrl -UseBasicParsing
        if (-not $releases) {
            Write-Err "No releases found on GitHub."
            exit 1
        }

        $asset = $null
        foreach ($rel in $releases | Sort-Object { [datetime]$_.published_at } -Descending) {
            $asset = $rel.assets | Where-Object { $_.name -like 'Jar2TypescriptDeclarationFileV2-*.jar' } | Select-Object -First 1
            if ($asset) { break }
        }

        if (-not $asset) {
            Write-Err "No suitable JAR asset found in repository releases."
            exit 1
        }

        $downloadPath = Join-Path (Get-Location) $asset.name
        Write-Info ("Downloading {0}..." -f $asset.browser_download_url)
        Invoke-WebRequest -Uri $asset.browser_download_url -OutFile $downloadPath -UseBasicParsing | Out-Null
        Write-Info ("Download complete: {0}" -f $downloadPath)
        return (Resolve-Path $downloadPath).Path
    }
    catch {
        Write-Err ("Failed to download converter JAR: {0}" -f $_.Exception.Message)
        exit 1
    }
}

if (-not (Test-Path -LiteralPath $Root -PathType Container)) {
    Write-Err ("Root path not found or not a directory: {0}" -f $Root)
    exit 1
}

$resolvedRoot = (Resolve-Path $Root).Path
$toolJarPath = Resolve-ToolJar -Candidate $JarPath
$javaExePath = "java"
if ($JavaPath) {
    if (-not (Test-Path -LiteralPath $JavaPath -PathType Leaf)) {
        Write-Err ("Java executable not found at specified path: {0}" -f $JavaPath)
        exit 1
    }
    $javaExePath = (Resolve-Path $JavaPath).Path
}

Write-Info ("Root directory : {0}" -f $resolvedRoot)
Write-Info ("Converter JAR : {0}" -f $toolJarPath)
Write-Info ("Java runtime   : {0}" -f $javaExePath)

Write-Info "Scanning for named.jar files..."
$namedJars = Get-ChildItem -Path $resolvedRoot -Filter 'named.jar' -File -Recurse -ErrorAction Stop

if (-not $namedJars -or $namedJars.Count -eq 0) {
    Write-Warn "No named.jar files found under the specified root."
    exit 0
}

Write-Info ("Found {0} named.jar file(s)." -f $namedJars.Count)

$generated = 0
$skipped = 0
$failed = 0
$planned = 0

foreach ($namedJar in $namedJars) {
    $dirPath = $namedJar.DirectoryName
    $outPath = Join-Path $dirPath 'index.d.ts'

    $relativeIn = Get-RelativePath -BasePath $resolvedRoot -TargetPath $namedJar.FullName
    $relativeOut = Get-RelativePath -BasePath $resolvedRoot -TargetPath $outPath

    if ((-not $Force) -and (Test-Path -LiteralPath $outPath)) {
        $skipped++
        Write-Info ("Skipping existing: {0}" -f $relativeOut)
        continue
    }

    if ($DryRun) {
        $planned++
        Write-Info ("Dry run: would generate {0}" -f $relativeOut)
        continue
    }

    Write-Info ("Generating: {0} -> {1}" -f $relativeIn, $relativeOut)
    & $javaExePath -jar $toolJarPath -i $namedJar.FullName -o $outPath -p Packages
    $exitCode = $LASTEXITCODE

    if ($exitCode -ne 0) {
        $failed++
        Write-Warn ("Converter failed for {0} (exit {1})." -f $relativeIn, $exitCode)
        continue
    }

    $generated++
}

Write-Host

if ($DryRun) {
    Write-Info ("Dry run complete. Pending generations: {0}." -f $planned)
}
else {
    Write-Info ("Generated: {0}" -f $generated)
}

Write-Info ("Skipped : {0}" -f $skipped)
Write-Info ("Failed  : {0}" -f $failed)

if (-not $DryRun -and $failed -gt 0) {
    Write-Err "One or more conversions failed."
    exit 1
}

Write-Info "Done."
