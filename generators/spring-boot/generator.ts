import BaseApplicationGenerator, { type Features, type Options } from 'generator-jhipster/generators/base-application';
import { createNeedleCallback } from 'generator-jhipster/generators/base-core/support';
import { files } from './files.ts';

export default class extends BaseApplicationGenerator {
  constructor(args?: string[], opts?: Options, features?: Features) {
    super(args, opts, { ...features, sbsBlueprint: true });
  }
  get [BaseApplicationGenerator.WRITING]() {
    return this.asWritingTaskGroup({
      async writingTemplateTask({ application }) {
        await this.writeFiles({
          sections: files, // 需确保 files 是 WriteFileBlock[]
          context: application,
        });
      },
    });
  }

  // 直接在 POST_WRITING_ENTITIES 中处理每个实体
  get [BaseApplicationGenerator.POST_WRITING_ENTITIES]() {
    return this.asPostWritingEntitiesTaskGroup({
      async postWritingEntitiesTemplateTask({ application, entities }) {
        // 过滤需要处理的实体（非内置且非跳过服务端）
        const processEntities = entities.filter(entity => !entity.builtIn && !entity.skipServer);

        // 遍历实体，逐个调用编辑方法
        for (let i = 0; i < processEntities.length; i++) {
          const entity = processEntities[i];
          const isLast = i === processEntities.length - 1;
          // this.addEntityToResourceConstants(application, entity.entityClass, isLast);
          this.addEntityToResourceConstants(application, entity.name, isLast);
        }
      },
    });
  }

  // 提取为独立方法，便于复用和测试
  addEntityToResourceConstants(application, entityName, isLast) {
    const constantsPath = `${application.javaPackageSrcDir}/security/ResourceConstants.java`;
    const upperSnakeCaseEntityName = this._.toUpper(this._.snakeCase(entityName));

    // 第一次编辑：添加常量声明
    this.editFile(
      constantsPath,
      createNeedleCallback({
        needle: 'jhipster-needle-add-entity-to-resource-constants',
        contentToAdd: `public static final String ${upperSnakeCaseEntityName} = "${upperSnakeCaseEntityName}";`,
        autoIndent: true,
      }),
    );

    // 第二次编辑：添加枚举条目
    this.editFile(
      constantsPath,
      createNeedleCallback({
        needle: 'jhipster-needle-add-entity-to-resource-enum',
        contentToAdd: `${upperSnakeCaseEntityName}(ResourceConstants.${upperSnakeCaseEntityName})${isLast ? ';' : ','}`,
        autoIndent: true,
      }),
    );
  }
}
