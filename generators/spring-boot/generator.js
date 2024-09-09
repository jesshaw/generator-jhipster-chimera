import BaseApplicationGenerator from 'generator-jhipster/generators/base-application';
import { createNeedleCallback } from 'generator-jhipster/generators/base/support';
import { files } from './files.js';

export default class extends BaseApplicationGenerator {
  constructor(args, opts, features) {
    super(args, opts, { ...features, sbsBlueprint: true });
  }

  get [BaseApplicationGenerator.PREPARING]() {
    return this.asPreparingTaskGroup({
      async preparingTemplateTask({ application, source }) {
        source.addEntityToResourceConstants = ({ entityName, last }) => {
          const entityMenuPath = `${application.javaPackageSrcDir}/security/ResourceConstants.java`;
          const upperSnakeCaseEntityName = this._.toUpper(this._.snakeCase(entityName));
          this.editFile(
            entityMenuPath,
            createNeedleCallback({
              needle: 'jhipster-needle-add-entity-to-resource-constants',
              contentToAdd: `public static final String ${upperSnakeCaseEntityName} = "${upperSnakeCaseEntityName}";`,
              autoIndent: true,
            }),
            createNeedleCallback({
              needle: 'jhipster-needle-add-entity-to-resource-enum',
              contentToAdd: `${upperSnakeCaseEntityName}(ResourceConstants.${upperSnakeCaseEntityName})${last ? ';' : ','}`,
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

  get [BaseApplicationGenerator.POST_WRITING_ENTITIES]() {
    return this.asPostWritingEntitiesTaskGroup({
      async postWritingEntitiesTemplateTask({ source, entities }) {
        const processEntities = entities.filter(entity => !entity.builtIn && !entity.skipServer);
        for (let index = 0; index < processEntities.length; index++) {
          const entity = processEntities[index];

          source.addEntityToResourceConstants({ entityName: entity.entityClass, last: index + 1 == processEntities.length });
        }
      },
    });
  }
}
