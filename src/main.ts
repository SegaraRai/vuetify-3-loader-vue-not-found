import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';
import { ViteSSG } from 'vite-ssg';
import App from '~/App.vue';

// Vuetify
import './styles/myVuetify.scss';
import '@mdi/font/css/materialdesignicons.css';
// windicss layers
import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
// your custom styles here
import './styles/main.css';
// windicss utilities should be the last style import
import 'virtual:windi-utilities.css';
// windicss devtools support (dev only)
import 'virtual:windi-devtools';

const routes = setupLayouts(generatedRoutes);

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(App, { routes }, (ctx): void => {
  // install all modules under `modules/`
  for (const mod of Object.values(import.meta.globEager('./modules/*.ts'))) {
    mod.install?.(ctx);
  }
});
