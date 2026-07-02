import BaseApplicationGenerator, { type Features, type Options } from 'generator-jhipster/generators/base-application';
import { configApp } from './appconfig.ts';

export default class extends BaseApplicationGenerator {
  constructor(args?: string[], opts?: Options, features?: Features) {
    super(args, opts, { ...features, sbsBlueprint: true });
  }

  get [BaseApplicationGenerator.PREPARING]() {
    return this.asPreparingTaskGroup({
      ...configApp(),
    });
  }
}
