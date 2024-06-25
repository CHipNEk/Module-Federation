import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'ng-module',
  exposes: {
    './Routes': 'apps/ng-module/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
