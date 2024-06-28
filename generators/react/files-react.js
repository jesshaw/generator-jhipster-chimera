import { clientRootTemplatesBlock, clientApplicationTemplatesBlock } from 'generator-jhipster/generators/client/support';

export const files = {
  common: [
    clientRootTemplatesBlock({
      templates: ['tailwind.config.js'],
    }),
  ],
  reactApp: [
    {
      ...clientApplicationTemplatesBlock(),
      // 要基于ejs模板生成测设置为true
      transform: true,
      templates: ['app.css', 'shared/layout/header/header.css'],
    },
  ],
};
