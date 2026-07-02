import BaseApplicationGenerator from 'generator-jhipster/generators/base-application';
import { commonFiles } from './files.ts';

export default class extends BaseApplicationGenerator {
  constructor(args, opts, features) {
    super(args, opts, { ...features, sbsBlueprint: true });
  }

  get [BaseApplicationGenerator.WRITING]() {
    return this.asWritingTaskGroup({
      async writingTemplateTask({ application }) {
        await this.writeFiles({
          sections: {
            common: commonFiles,
          },
          context: application,
        });
      },
    });
  }
}
