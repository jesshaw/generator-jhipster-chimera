import BaseApplicationGenerator from 'generator-jhipster/generators/base-application';
import { configApp } from './appconfig.js';

export default class extends BaseApplicationGenerator {
  constructor(args, opts, features) {
    super(args, opts, { ...features, sbsBlueprint: true });
  }

  get [BaseApplicationGenerator.PREPARING]() {
    return this.asPreparingTaskGroup({
      ...configApp(),
    });
  }
}
