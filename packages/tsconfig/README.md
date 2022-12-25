# `@savelevmatthew/tsconfig`

> These are boilerplate set of tsconfig.json for Next / React based projects.

To use a config, simply add it to the `extends` field of your `tsconfig.json`.

## React library with `src` folder

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@savelelevmatthew/tsconfig/react-lib.json"
}
```

## Next.js application

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@savelelevmatthew/tsconfig/next-app.json"
}
```