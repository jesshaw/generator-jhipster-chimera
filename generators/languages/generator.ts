import BaseApplicationGenerator, { type Features, type Options } from 'generator-jhipster/generators/base-application';
import { writeLocalizationEntityMenu, writeLocalizationEntityFiles, writeAppInfo } from './files.ts';

export default class extends BaseApplicationGenerator {
  constructor(args?: string[], opts?: Options, features?: Features) {
    super(args, opts, { ...features, sbsBlueprint: true });
  }

  get [BaseApplicationGenerator.WRITING]() {
    return this.asWritingTaskGroup({
      // async writingTemplateTask({ application }) {
      //   await this.writeFiles({
      //     sections: {
      //       files: [{ templates: ['template-file-languages'] }],
      //     },
      //     context: application,
      //   });
      // },
      ...writeAppInfo(),
    });
  }

  get [BaseApplicationGenerator.WRITING_ENTITIES]() {
    return this.asWritingEntitiesTaskGroup({
      // async writingEntitiesTemplateTask() {},
      
      //仅使用模板方式验证后存在问题
      ...writeLocalizationEntityFiles(),
    });
  }

  get [BaseApplicationGenerator.POST_WRITING_ENTITIES]() {
    return this.asPostWritingEntitiesTaskGroup({
      // async postWritingEntitiesTemplateTask() {},
      ...writeLocalizationEntityMenu(),
    });
  }
}
