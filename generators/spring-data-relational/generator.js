import BaseApplicationGenerator from 'generator-jhipster/generators/base-application';

export default class extends BaseApplicationGenerator {
  constructor(args, opts, features) {
    super(args, opts, { ...features, sbsBlueprint: true });
  }

  get [BaseApplicationGenerator.WRITING]() {
    return this.asWritingTaskGroup({
      async writingTemplateTask() {
        // await this.writeFiles({
        //   sections: {
        //     files: [{ templates: ['template-file-spring-data-relational'] }],
        //   },
        //   context: application,
        // });
      },
    });
  }
}
