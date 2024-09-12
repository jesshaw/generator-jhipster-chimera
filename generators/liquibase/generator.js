import BaseApplicationGenerator from 'generator-jhipster/generators/base-application';

import { liquibaseFiles } from './files.js';

export default class extends BaseApplicationGenerator {
  constructor(args, opts, features) {
    super(args, opts, { ...features, sbsBlueprint: true });
  }

  get [BaseApplicationGenerator.PREPARING]() {
    return this.asPreparingTaskGroup({
      async preparingTemplateTask({ application, source }) {
        source.addEntitiesToResourceCsv = ({ entities }) => {
          const entityMenuPath = `${application.srcMainResources}/config/liquibase/fake-data/resource.csv`;
          let content = '';
          let operations = ['ACCESS', 'DELETE', 'EDIT', 'EXPORT', 'IMPORT', 'LIST', 'MASSUPDATE', 'VIEW'];
          let i = 1;
          for (let index = 0; index < entities.length; index++) {
            operations.forEach(op => {
              let line = [];
              line.push(i++);

              const entity = entities[index];
              line.push(this._.toUpper(this._.snakeCase(entity.entityClass)));

              line.push(op);
              content = content + line.join(';') + '\n';
            });
          }
          this.editFile(entityMenuPath, c => {
            c = 'id;name;permission\n';
            return c + content;
          });
        };
      },
    });
  }

  get [BaseApplicationGenerator.WRITING]() {
    return this.asWritingTaskGroup({
      async writingTemplateTask({ application }) {
        await this.writeFiles({
          sections: liquibaseFiles,
          context: application,
        });
      },
    });
  }

  get [BaseApplicationGenerator.WRITING_ENTITIES]() {
    return this.asWritingEntitiesTaskGroup({
      async writingEntitiesTemplateTask() {},
    });
  }

  get [BaseApplicationGenerator.POST_WRITING_ENTITIES]() {
    return this.asPostWritingEntitiesTaskGroup({
      async postWritingEntitiesTemplateTask({ source, entities }) {
        const processEntities = entities.filter(entity => !entity.skipFakeData && !entity.skipServer);

        source.addEntitiesToResourceCsv({ entities: processEntities });
      },
    });
  }
}
