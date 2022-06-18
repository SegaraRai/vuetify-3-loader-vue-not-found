import { createVuetify } from 'vuetify';
import type { UserModule } from '~/types';

export const install: UserModule = ({ app }) => {
  app.use(
    createVuetify({
      theme: {
        defaultTheme: 'dark',
      },
      display: {
        thresholds: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1920,
          xxl: 2560,
        },
      },
    })
  );
};
