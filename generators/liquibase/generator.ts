import BaseApplicationGenerator, { type Features, type Options } from 'generator-jhipster/generators/base-application';
import { liquibaseFiles } from './files.ts';

export default class extends BaseApplicationGenerator {
  constructor(args?: string[], opts?: Options, features?: Features) {
    super(args, opts, { ...features, sbsBlueprint: true });
  }
  // WRITING 阶段不变（前提是 liquibaseFiles 已适配为数组）
  get [BaseApplicationGenerator.WRITING]() {
    return this.asWritingTaskGroup({
      async writingTemplateTask({ application }) {
        await this.writeFiles({
          sections: liquibaseFiles, // 需保证是 WriteFileBlock[]
          context: application,
        });
      },
    });
  }

  // POST_WRITING_ENTITIES 阶段处理实体相关文件的编辑
  get [BaseApplicationGenerator.POST_WRITING_ENTITIES]() {
    return this.asPostWritingEntitiesTaskGroup({
      async postWritingEntitiesTemplateTask({ application, entities }) {
        // 过滤出需要生成 fake data 的实体
        const processEntities = entities.filter(entity => !entity.skipFakeData && !entity.skipServer);

        // 直接编辑 CSV 文件
        const csvPath = `${application.srcMainResources}/config/liquibase/fake-data/resource.csv`;
        const operations = ['ACCESS', 'READ', 'EDIT', 'IMPORT', 'EXPORT', 'DELETE'];
        let lineNumber = 1;
        let csvContent = 'id;name;permission;authority_name\n';

        for (const entity of processEntities) {
          const entityName = this._.toUpper(this._.snakeCase(entity.name));
          for (const op of operations) {
            const line = [lineNumber++, entityName, op, 'ROLE_ADMIN'];
            csvContent += line.join(';') + '\n';
          }
        }

        // 使用 editFile 覆盖写入（或追加，这里选择覆盖）
        this.editFile(csvPath, () => csvContent);
      },
    });
  }
}
