import type { JHipsterCommandDefinition } from 'generator-jhipster';
import type {
  Application as BaseApplication,
  Config as BaseConfig,
  Entity as BaseEntity,
  Options as BaseOptions,
  Source as BaseSource,
} from 'generator-jhipster/generators/app';
import BaseApplicationGenerator from 'generator-jhipster/generators/base-application';

type ChimeraBlueprintConfig = any;

type ChimeraEntity = BaseEntity;

export type ChimeraApplication = BaseApplication<ChimeraEntity> & {
  ChimeraEventChangelogDate: string;
  auditedEntities: string[];
};

type ChimeraOptions = BaseOptions;

type ChimeraSource = BaseSource;

export default class ChimeraApplicationGenerator extends BaseApplicationGenerator<
  ChimeraEntity,
  ChimeraApplication,
  BaseConfig,
  ChimeraOptions,
  ChimeraSource
> {
  declare blueprintConfig: ChimeraBlueprintConfig;
}

export const asCommand = <const Def extends JHipsterCommandDefinition<ChimeraApplicationGenerator>>(command: Def): Def => command;
