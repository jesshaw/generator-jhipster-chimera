import { clientSrcTemplatesBlock } from 'generator-jhipster/generators/client/support';

export const commonFiles = {
  layoutFiles: [
    // 同名同路径下的文件会自动覆盖
    clientSrcTemplatesBlock({
      transform: false,
      relativePath: 'content/images/',
      templates: ['logo.png', 'chamera1-512.svg'],
    }),
  ],
};
