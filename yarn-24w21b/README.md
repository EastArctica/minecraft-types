# @minecraft-types/yarn-24w21b

Typescript definitions for Minecraft 24w21b (Fabric/Yarn mappings), all known builds.

## Usage

Install from npm or pnpm:

```bash
npm install @minecraft-types/yarn-24w21b
# or
pnpm add @minecraft-types/yarn-24w21b
```

Then, in your `tsconfig.json`, add the following to the `compilerOptions` section:

```json
{
  "compilerOptions": {
    "types": [
      "@minecraft-types/yarn-24w21b"
    ]
  }
}
```

If you require a specific yarn build number instead of the default (latest) build, specify it like this:
```json
{
  "compilerOptions": {
    "types": [
      "@minecraft-types/yarn-24w21b/build.<BUILD_NUMBER>"
    ]
  }
}
```

Replace `<BUILD_NUMBER>` with the desired build number.

Note: adding the `types` array explicitly tells TypeScript which global type packages to include. When you set `compilerOptions.types` it will only include the packages listed there and will not automatically include other `@types/*` packages (for example `node`). If you need other ambient types, add them to the array as well or consider using `typeRoots` or a project `global.d.ts` instead.

## Using the types and handling globals

By default, this will expose the types under the `Packages` namespace (ex. `Packages.java.io.BufferedInputStream`).

If you work in an environment where the global namespace is polluted differently with Java types, you can re-namespace the types by creating a `global.d.ts` file in your project with the following content:

```ts
// global.d.ts
declare global {
  const java: typeof Packages.java;
  // Add other root namespaces as needed (e.g., javax, com, org, etc.)
  // const com: typeof Packages.com;

  // If your environment exposes something other than 'Packages', you can alias it here
  // const SomeOtherPackages: typeof Packages;
}

export {}; // keep file a module so TS merges properly
```

If instead, you'd prefer to only pollute the global namespace within that file, you can add the following to your typescript files:
```ts
declare const java: typeof Packages.java;
// Add other root namespaces as needed (e.g., javax, com, org, etc.)
// declare const com: typeof Packages.com;

// If your environment exposes something other than 'Packages', you can alias it here
// declare const SomeOtherPackages: typeof Packages;
```

## Examples

- Referencing a Java type directly from the ambient `Packages` types:

```ts
// Uses the package name as exposed by the types
type BIS = Packages.java.io.BufferedInputStream;

declare const inStream: BIS;
```

- Using the `java` alias from the `global.d.ts` example:

```ts
const s: string = java.lang.String.valueOf(123);
```

## License

CC0-1.0
