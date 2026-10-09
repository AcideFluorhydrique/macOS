import { createAppConfig } from '__/helpers/create-app-config';

export const homepageAppConfig = createAppConfig({
  title: `Ariel's Homepage`,
  resizable: true,

  shouldOpenWindow: false,
  externalAction: () => window.open('https://lanticy.codeberg.page/', '_blank'),

  dockBreaksBefore: true,
});
