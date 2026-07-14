// import { JAVA_SERVER_TEST_RESOURCES_DIR as SERVER_TEST_RES_DIR } from 'generator-jhipster';
import { JAVA_MAIN_RESOURCES_DIR } from 'generator-jhipster';

export const liquibaseFiles = {
  serverResource: [
    {
      condition: generator => Boolean(generator.generateBuiltInAuthorityEntity),
      path: JAVA_MAIN_RESOURCES_DIR,
      templates: ['config/liquibase/fake-data/resource.csv'],
    },
  ],
};
