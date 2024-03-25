import { PERMISSIONS, entryPointUriPath } from './src/constants';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, 'vars', '.env') });
/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomApplication}
 */
const config = {
  name: 'Custom Type App',
  entryPointUriPath,
  cloudIdentifier: 'gcp-au',
  env: {
    development: {
      initialProjectKey: 'ct-assessment',
    },
    production: {
      applicationId: process.env.APP_ID || 'applicationId',
      url: process.env.APP_URL || 'url',
    },
  },
  oAuthScopes: {
    view: ['view_products'],
    manage: ['manage_products'],
  },
  icon: '${path:@commercetools-frontend/assets/application-icons/rocket.svg}',
  mainMenuLink: {
    defaultLabel: 'Template starter',
    labelAllLocales: [],
    permissions: [PERMISSIONS.View],
  },
  submenuLinks: [
    {
      uriPath: 'channels',
      defaultLabel: 'Channels',
      labelAllLocales: [],
      permissions: [PERMISSIONS.View],
    },
  ],
};

export default config;
