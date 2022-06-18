// to enable the workaround, set this to `true`, remove `node_modules` and `pnpm-lock.yaml`, then run `pnpm i`
const WORKAROUND_ENABLED = false;

function readPackage(pkg, context) {
  if (pkg.name === '@vuetify/loader-shared' && pkg.version === '1.5.0') {
    if (WORKAROUND_ENABLED) {
      pkg.peerDependencies = {
        vue: '^3.2.0',
        ...pkg.peerDependencies,
      };
      context.log(`${pkg.name}: added peer dependency vue`);
    } else {
      console.log(`${pkg.name}: workaround is disabled`);
    }
  }

  if (pkg.name === 'vite-plugin-vuetify' && pkg.version === '1.0.0-alpha.12') {
    if (WORKAROUND_ENABLED) {
      // NOTE: instead of adding upath to dependencies, we may export upath from @vuetify/loader-shared
      pkg.dependencies = {
        upath: '^2.0.1',
        ...pkg.dependencies,
      };
      context.log(`${pkg.name}: added dependency upath`);
    } else {
      console.log(`${pkg.name}: workaround is disabled`);
    }
  }

  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
};
