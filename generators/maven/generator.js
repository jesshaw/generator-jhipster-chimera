import BaseApplicationGenerator from 'generator-jhipster/generators/base-application';

export default class extends BaseApplicationGenerator {
  constructor(args, opts, features) {
    super(args, opts, { ...features, sbsBlueprint: true });
  }

  async beforeQueue() {
    // 确保自定义生成器在 Maven 生成器之后运行
    await this.dependsOnJHipster('maven', { priority: 'before' });
  }

  get [BaseApplicationGenerator.PREPARING]() {
    return this.asPreparingTaskGroup({
      async preparingTemplateTask({ source }) {
        source.editPom = () => {
          this.editFile(`pom.xml`, content => {
            const newContent = content
              .replace('npmVersion', 'yarnVersion')
              .replace('npm.Version', 'yarn.Version')
              .replace('<goal>install-node-and-npm</goal>', '<goal>install-node-and-yarn</goal>')
              .replace('<goal>npm</goal>', '<goal>yarn</goal>');
            return newContent;
          });
        };
      },
    });
  }

  get [BaseApplicationGenerator.POST_WRITING]() {
    return this.asPostWritingTaskGroup({
      async postWritingTemplateTask({ source }) {
        source.addMavenDefinition({
          properties: [{ property: 'yarn.version', value: 'v1.22.22' }],
        });
        source.editPom();
      },
    });
  }
}
