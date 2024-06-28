import BaseApplicationGenerator from 'generator-jhipster/generators/base-application';
import { files } from './files-react.js';

export default class extends BaseApplicationGenerator {
  constructor(args, opts, features) {
    super(args, opts, { ...features, sbsBlueprint: true });
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

    // return this.asWritingTaskGroup({
    // async writingTemplateTask({ application }) {
    //   await this.writeFiles({
    //     sections: {
    //       files: [{ templates: ['template-file-react'] }],
    //     },
    //     context: application,
    //   });
    // },
    // });
  }
}
