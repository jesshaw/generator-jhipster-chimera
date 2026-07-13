import BaseApplicationGenerator, { type Features, type Options } from '../../../base-generator.ts';

export default class extends BaseApplicationGenerator {
  constructor(args?: string[], opts?: Options, features?: Features) {
    super(args, opts, { ...features, sbsBlueprint: true });
  }

  get [BaseApplicationGenerator.WRITING]() {
    return this.asWritingTaskGroup({
      async writingTemplateTask({ application }) {
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
