import { clientSrcTemplatesBlock } from 'generator-jhipster/generators/client/support';

export const commonFiles = {
  layoutFiles: [
    // 同名同路径下的文件会自动覆盖
    clientSrcTemplatesBlock({
      transform: false,
      relativePath: 'content/images/',
      templates: ['logo.png', 'chamera1-512.png'],
    }),
  ],
  common: [
    {
      ...clientSrcTemplatesBlock(),
      transform: false,
      templates: [
        'content/theme/theme-light/blue/theme.css',
        'content/theme/theme-light/blue/fonts/Inter-italic.var.woff2',
        'content/theme/theme-light/blue/fonts/Inter-roman.var.woff2',
      ],
    },
  ],
};
