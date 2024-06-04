import BaseApplicationGenerator from 'generator-jhipster/generators/base-application';
import { writeLocalizationEntityMenu, writeLocalizationEntityFiles, writeAppInfo } from './files.js';

export default class extends BaseApplicationGenerator {
  constructor(args, opts, features) {
    super(args, opts, { ...features, sbsBlueprint: true });
  }

  get [BaseApplicationGenerator.WRITING]() {
    return this.asWritingTaskGroup({
      ...writeAppInfo(),
    });
  }

  get [BaseApplicationGenerator.WRITING_ENTITIES]() {
    return this.asWritingEntitiesTaskGroup({
      //仅使用模板方式验证后存在问题
      ...writeLocalizationEntityFiles(),
    });
  }

  get [BaseApplicationGenerator.POST_WRITING_ENTITIES]() {
    return this.asPostWritingEntitiesTaskGroup({
      ...writeLocalizationEntityMenu(),
    });
  }
}
