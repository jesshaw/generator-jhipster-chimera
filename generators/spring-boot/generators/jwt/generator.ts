import BaseApplicationGenerator from '../../../base-generator.ts';
import type { Features, Options } from 'generator-jhipster/generators/base-application';

export default class extends BaseApplicationGenerator {
  constructor(args?: string[], opts?: Options, features?: Features) {
    super(args, opts, { ...features, sbsBlueprint: true });
  }

  get [BaseApplicationGenerator.WRITING]() {
    return this.asWritingTaskGroup({
      async writingTemplateTask({ application: _application }) {
        // await this.writeFiles({
        //   sections: {
        //     files: [{ templates: ['template-file-spring-boot/generators/jwt'] }],
        //   },
        //   context: application,
        // });
      },
    });
  }
}
