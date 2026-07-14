import BaseApplicationGenerator, { type Features, type Options } from 'generator-jhipster/generators/base-application';
import { createNeedleCallback } from 'generator-jhipster/generators/base-core/support';
import { files, unwantedFiles } from './files-react.ts';

export default class extends BaseApplicationGenerator {
  constructor(args?: string[], opts?: Options, features?: Features) {
    super(args, opts, { ...features, sbsBlueprint: true });
  }

  get [BaseApplicationGenerator.WRITING]() {
    return this.asWritingTaskGroup({
      async writingTemplateTask({ application }) {
        await this.writeFiles({
          sections: files, // 确保 files 是 WriteFileBlock[]
          context: application,
        });
      },
    });
  }

  get [BaseApplicationGenerator.POST_WRITING]() {
    return this.asPostWritingTaskGroup({
      async customPostWritingActions({ application }) {
        this.removeUnwantedFiles(application);
      },
    });
  }

  // 将实体菜单更新直接放在此处，不再通过 source 挂载
  get [BaseApplicationGenerator.POST_WRITING_ENTITIES]() {
    return this.asPostWritingEntitiesTaskGroup({
      async postWritingEntitiesTemplateTask({ application, entities }) {
        // 过滤需要处理的实体（非内置且需要客户端）
        const targetEntities = entities.filter(entity => !entity.builtIn && !entity.skipClient);

        // 对每个实体执行菜单添加
        for (const entity of targetEntities) {
          // this.addEntityToEntitiesMenu(application, entity.entityClass);
          this.addEntityToEntitiesMenu(application, entity.name);
        }
      },
    });
  }

  // 提取为独立方法，便于复用
  addEntityToEntitiesMenu(application, entityName) {
    const entityMenuPath = `${application.clientSrcDir}/app/entities/entities-menu-data.ts`;
    const camelCaseEntityName = this._.camelCase(entityName);
    const kebabCaseEntityName = this._.kebabCase(entityName);
    const upperSnakeCaseEntityName = this._.toUpper(this._.snakeCase(entityName));

    this.editFile(
      entityMenuPath,
      createNeedleCallback({
        needle: 'jhipster-needle-add-entity-to-entities-menu',
        contentToAdd: `${camelCaseEntityName}MenuItem: { label: '${upperSnakeCaseEntityName}', labelKey: 'global.menu.entities.${camelCaseEntityName}', url: '/${kebabCaseEntityName}' },`,
        autoIndent: true,
      }),
    );
  }

  // 以下两个方法保持不变（但确保类型安全）
  removeUnwantedFiles(application) {
    const filesToRemove = this.getUnwantedFilesList(application);
    filesToRemove.forEach(file => {
      const filePath = this.destinationPath(file);
      if (this.fs.exists(filePath)) {
        this.fs.delete(filePath);
        this.log(`Removed file: ${file}`);
      }
    });
  }

  getUnwantedFilesList(application) {
    const realUnwantedFiles = unwantedFiles?.files.map(item => `${application.clientSrcDir}${item}`) || [];

    // 处理实体相关文件
    (this.jhipsterConfig.entities ?? []).forEach(entity => {
      unwantedFiles?.entityFiles.forEach(item => {
        let file = `${application.clientSrcDir}${item}`
          .replace('_entityFolder_', this._.kebabCase(entity))
          .replace('_entityFile_', this._.kebabCase(entity));
        realUnwantedFiles.push(file);
      });
    });
    return realUnwantedFiles;
  }
}
