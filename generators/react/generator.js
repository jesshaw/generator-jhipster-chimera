import BaseApplicationGenerator from 'generator-jhipster/generators/base-application';
import { files, unwantedFiles } from './files-react.js';
import { kebabCase } from 'lodash-es';

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

  get [BaseApplicationGenerator.POST_WRITING]() {
    return this.asPostWritingTaskGroup({
      async customPostWritingActions({ application }) {
        this.removeUnwantedFiles(application);
      },
    });
  }

  removeUnwantedFiles(application) {
    const filesToRemove = this.getUnwantedFilesList(application);

    filesToRemove.forEach(file => {
      const filePath = this.destinationPath(file);
      if (this.fs.exists(filePath)) {
        this.fs.delete(filePath);
        this.log(`Removed file: ${file}`);
      }
    });
  }

  getUnwantedFilesList(application) {
    const realUnwantedFiles = unwantedFiles?.files.map(item => `${application.clientSrcDir}${item}`);

    this.jhipsterConfig.entities.forEach(entity => {
      unwantedFiles?.entityFiles.forEach(item => {
        let file = `${application.clientSrcDir}${item}`
          .replace('_entityFolder_', kebabCase(entity))
          .replace('_entityFile_', kebabCase(entity));
        realUnwantedFiles.push(file);
      });
    });
    return realUnwantedFiles;
  }
}
