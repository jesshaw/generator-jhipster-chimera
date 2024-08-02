import { JAVA_WEBAPP_SOURCES_DIR } from 'generator-jhipster';
import { startCase } from 'lodash-es';

export const entityClientI18nFiles = {
  entityBaseFiles: [
    {
      templates: [
        {
          sourceFile: context => `entity/i18n/entity_${context.lang}.json.ejs`,
          destinationFile: context => `${context.clientSrcDir}i18n/${context.lang}/${context.entityTranslationKey}.json`,
        },
      ],
    },
  ],
};

export const clientI18nFiles = {
  clientI18nFiles: [
    {
      from: context => `${JAVA_WEBAPP_SOURCES_DIR}/i18n/${context.lang}/`,
      to: context => `${context.clientSrcDir}/i18n/${context.lang}/`,
      templates: ['home.json','global.json'],
    },
  ],
};

export function writeLocalizationEntityFiles() {
  return {
    async writeLocalizationEntityFiles({ application, entities }) {
      this.log('---------lxm writeLocalizationEntityFiles----------');
      if (application.skipClient) return;
      const entitiesToWriteTranslationFor = entities.filter(entity => !entity.skipClient && !entity.builtInUser);
      if (application.userManagement && application.userManagement.skipClient) {
        entitiesToWriteTranslationFor.push(application.userManagement);
      }

      // Copy each
      const { clientSrcDir, frontendAppName } = application;
      const languagesToApply = [...new Set([application.nativeLanguage, 'en'])];
      for (const entity of entitiesToWriteTranslationFor) {
        for (const lang of languagesToApply) {
          if (!entity.builtInUserManagement) {
            if (lang == 'zh-cn') {
              if (entity.documentation !== undefined) {
                entity.entityClassHumanized = entity.documentation;
                entity.entityClassPluralHumanized = entity.documentation; //复数
              }
              entity.fields.forEach(field => {
                // this.log(field.fieldName)
                if (field.documentation !== undefined) field.fieldNameHumanized = field.documentation;
              });
            } else {
              if (entity.documentation !== undefined) {
                entity.entityClassHumanized = entity.entityClass;
                entity.entityClassPluralHumanized = entity.entityClassPlural; //复数
              }
              entity.fields.forEach(field => {
                if (field.documentation !== undefined) field.documentation = field.fieldNameCapitalized;
                field.fieldNameHumanized = field.fieldNameCapitalized;
              });
            }
          }
          await this.writeFiles({ sections: entityClientI18nFiles, context: { ...entity, clientSrcDir, frontendAppName, lang } });
        }
      }
      this.log('---------lxm writeLocalizationEntityFiles end----------');
    },
  };
}

export function writeLocalizationEntityMenu() {
  return {
    async writeLocalizationEntityMenu({ application, entities, source }) {
      this.log('---------lxm writeLocalizationEntityMenu----------');
      if (application.skipClient) return;
      const languagesToApply = [...new Set([application.nativeLanguage, 'en'])];
      for (const entity of entities.filter(entity => !entity.skipClient && !entity.builtInUser)) {
        for (const language of languagesToApply) {
          source.addEntityTranslationKey?.({
            language,
            translationKey: entity.entityTranslationKeyMenu,
            translationValue:
              language == 'zh-cn' && entity.documentation !== undefined
                ? entity.documentation
                : entity.entityClassHumanized ?? startCase(entity.entityClass),
          });
        }
      }
      this.log('---------lxm writeLocalizationEntityMenu end----------');
    },
  };
}

export function writeAppInfo() {
  return {
    async writeAppInfo({ application }) {
      if (application.skipClient) return;
      const languagesToApply = [...new Set([application.nativeLanguage, 'en'])];
      await Promise.all(
        languagesToApply.map(lang =>
          this.writeFiles({
            sections: clientI18nFiles,
            context: {
              ...application,
              lang,
            },
          }),
        ),
      );
    },
  };
}
