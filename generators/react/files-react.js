import { clientRootTemplatesBlock, clientApplicationTemplatesBlock } from 'generator-jhipster/generators/client/support';

export const files = {
  common: [
    clientRootTemplatesBlock({
      templates: ['package.json', 'postcss.config.js', 'tailwind.config.js', 'webpack/webpack.common.js', 'webpack/webpack.dev.js'],
    }),
  ],
  reactApp: [
    {
      ...clientApplicationTemplatesBlock(),
      // 要基于ejs模板生成测设置为true
      transform: true,
      templates: [
        'app.css',
        'app.tsx',
        'config/notification-middleware.ts',
        'entities/reducers.ts',
        'index.tsx',
        'modules/account/password/password.tsx',
        'modules/account/password-reset/finish/password-reset-finish.tsx',
        'modules/account/password-reset/init/password-reset-init.css',
        'modules/account/password-reset/init/password-reset-init.tsx',
        'modules/account/register/register.tsx',
        'modules/account/settings/settings.tsx',
        'modules/administration/user-management/user-management.tsx',
        'modules/home/home.css',
        'modules/home/home.tsx',
        'modules/login/login-modal.tsx',
        'modules/login/login.css',
        'modules/login/login.tsx',
        'modules/login/logout.tsx',
        'routes.tsx',
        'shared/layout/bg.tsx',
        'shared/layout/full-page-layout.tsx',
        'shared/layout/header/header-components.tsx',
        'shared/layout/header/header.css',
        'shared/layout/header/header.tsx',
        'shared/layout/header/my-profile.css',
        'shared/layout/header/my-profile.tsx',
        'shared/layout/logo.tsx',
        'shared/layout/menus/bread-item.tsx',
        'shared/layout/menus/locale-dropdown.tsx',
        'shared/layout/menus/side-menu.tsx',
        'shared/layout/menus/sidebar.css',
        'shared/layout/menus/sidebar.tsx',
        'shared/layout/theme/theme-context.tsx',
        'shared/layout/theme/theme-selector.css',
        'shared/layout/theme/theme-selector.tsx',
        'shared/layout/theme/toast-manager.ts',
        'shared/layout/theme/use-theme.ts',
        'shared/reducers/index.ts',
        'shared/reducers/ui.ts',
      ],
    },
  ],
};

export const unwantedFiles = {
  files: ['app/app.scss'],
  entityFiles: ['app/entities/_entityFolder_/_entityFile_-delete-dialog.tsx'],
};
