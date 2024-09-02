import BaseApplicationGenerator from 'generator-jhipster/generators/base-application';
import { files, unwantedFiles } from './files-react.js';
import { kebabCase } from 'lodash-es';
import { createNeedleCallback } from 'generator-jhipster/generators/base/support';

export default class extends BaseApplicationGenerator {
  constructor(args, opts, features) {
    super(args, opts, { ...features, sbsBlueprint: true });
  }

  get [BaseApplicationGenerator.PREPARING]() {
    return this.asPreparingTaskGroup({
      async preparingTemplateTask({ application, source }) {
        source.addEntityToEntitiesMenu = ({ entityName }) => {
          const entityMenuPath = `${application.clientSrcDir}/app/entities/entities-menu-data.ts`;
          const camelCaseEntityName = this._.camelCase(entityName);
          const kebabCaseEntityName = this._.kebabCase(entityName);
          this.editFile(
            entityMenuPath,
            createNeedleCallback({
              needle: 'jhipster-needle-add-entity-to-entities-menu',
              contentToAdd: `${camelCaseEntityName}MenuItem: { label: '${camelCaseEntityName}', labelKey: 'global.menu.entities.${camelCaseEntityName}', url: '/${kebabCaseEntityName}' },`,
              autoIndent: true,
            }),
          );
        };
      },
    });
  }

  get [BaseApplicationGenerator.WRITING]() {
    return this.asWritingTaskGroup({
      async writingTemplateTask({ application }) {
        await this.writeFiles({
          sections: files,
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

  get [BaseApplicationGenerator.POST_WRITING_ENTITIES]() {
    return this.asPostWritingEntitiesTaskGroup({
      async postWritingEntitiesTemplateTask({ source, entities }) {
        for (const entity of entities.filter(entity => !entity.builtIn && !entity.skipClient)) {
          source.addEntityToEntitiesMenu({ entityName: entity.entityClass });
        }
      },
    });
  }

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
    const realUnwantedFiles = unwantedFiles?.files.map(item => `${application.clientSrcDir}${item}`);

    this.jhipsterConfig.entities.forEach(entity => {
      unwantedFiles?.entityFiles.forEach(item => {
        let file = `${application.clientSrcDir}${item}`
          .replace('_entityFolder_', kebabCase(entity))
          .replace('_entityFile_', kebabCase(entity));
        realUnwantedFiles.push(file);
      });
    });
    return realUnwantedFiles;
  }
}
