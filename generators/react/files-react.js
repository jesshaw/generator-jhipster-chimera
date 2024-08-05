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
        'index.tsx',
        'modules/home/home.css',
        'modules/home/home.tsx',
        'shared/layout/header/header-components.tsx',
        'shared/layout/header/header.css',
        'shared/layout/header/header.tsx',
        'shared/layout/header/my-profile.css',
        'shared/layout/header/my-profile.tsx',
        'shared/layout/logo.tsx',
        'shared/layout/menus/locale-dropdown.tsx',
        'shared/layout/menus/side-menu.tsx',
        'shared/layout/menus/sidebar.css',
        'shared/layout/menus/sidebar.tsx',
        'shared/layout/theme/theme-context.tsx',
        'shared/layout/theme/theme-selector.css',
        'shared/layout/theme/theme-selector.tsx',
        'shared/layout/theme/use-theme.ts',
      ],
    },
  ],
};
