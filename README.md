# Vuetify loader dependency bug repro

Please use `pnpm` for installing dependencies.  
This repository specifies `hoist=false` in `.npmrc` to prevent dependencies from being hoisted.

## Steps to reproduce

1. run `pnpm i`
2. run `pnpm run dev` (or `pnpm run build` alternatively)

You should see an error message similar to the following:

```plaintext
> pnpm dev

> vuetify-3-loader-vue-not-found@1.0.0 dev D:\Projects\vuetify-3-loader-vue-not-found
> vite --port 8811 --open

failed to load config from D:\Projects\vuetify-3-loader-vue-not-found\vite.config.ts
error when starting dev server:
Error: Cannot find module 'upath'
Require stack:
- D:\Projects\vuetify-3-loader-vue-not-found\node_modules\.pnpm\vite-plugin-vuetify@1.0.0-alpha.12_gzajpnq2fpaeesoifjqonylx5m\node_modules\vite-plugin-vuetify\dist\stylesPlugin.js
- D:\Projects\vuetify-3-loader-vue-not-found\node_modules\.pnpm\vite-plugin-vuetify@1.0.0-alpha.12_gzajpnq2fpaeesoifjqonylx5m\node_modules\vite-plugin-vuetify\dist\index.js
- D:\Projects\vuetify-3-loader-vue-not-found\vite.config.ts
- D:\Projects\vuetify-3-loader-vue-not-found\node_modules\.pnpm\vite@2.9.12_sass@1.52.3\node_modules\vite\dist\node\chunks\dep-8f5c9290.js
- D:\Projects\vuetify-3-loader-vue-not-found\node_modules\.pnpm\vite@2.9.12_sass@1.52.3\node_modules\vite\dist\node\cli.js
- D:\Projects\vuetify-3-loader-vue-not-found\node_modules\.pnpm\vite@2.9.12_sass@1.52.3\node_modules\vite\bin\vite.js
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:933:15)
    at Function.Module._load (node:internal/modules/cjs/loader:778:27)
    at Module.require (node:internal/modules/cjs/loader:1005:19)
    at require (node:internal/modules/cjs/helpers:102:18)
    at Object.<anonymous> (D:\Projects\vuetify-3-loader-vue-not-found\node_modules\.pnpm\vite-plugin-vuetify@1.0.0-alpha.12_gzajpnq2fpaeesoifjqonylx5m\node_modules\vite-plugin-vuetify\dist\stylesPlugin.js:5:14)    at Module._compile (node:internal/modules/cjs/loader:1103:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1157:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Module.require (node:internal/modules/cjs/loader:1005:19)
```

## Suggested solution

- Add `vue` to `peerDependencies` of `@vuetify/loader-shared`
- And, add `upath` to `dependencies` of `vite-plugin-vuetify` and `webpack-plugin-vuetify` (or export `upath` from `@vuetify/loader-shared`)

This repository contains [`.pnpmfile.cjs`](https://pnpm.io/pnpmfile) that does the above (disabled by default).  
It can be activated by editing `.pnpmfile.cjs`, deleting `node_modules` and `.pnpm-lock.yaml`, and running `pnpm i` again.

## Workaround

- Create `.pnpmfile.cjs` that adds missing dependencies.
- Hoist `vue` and `upath`
