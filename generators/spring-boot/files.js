// import { JAVA_SERVER_TEST_RESOURCES_DIR as SERVER_TEST_RES_DIR } from 'generator-jhipster';
import { JAVA_MAIN_SOURCES_DIR } from 'generator-jhipster';

import { moveToJavaPackageSrcDir } from 'generator-jhipster/generators/java/support';

export const files = {
  serverJavaAuthConfig: [
    {
      path: `${JAVA_MAIN_SOURCES_DIR}_package_/`,
      renameTo: moveToJavaPackageSrcDir,
      templates: [
        'domain/DictionaryEntry.java',
        'security/CustomPermissionEvaluatorService.java',
        'security/CustomUserDetails.java',
        'security/PermissionConstants.java',
        'security/ResourceConstants.java',
        'service/dto/PermissionAdminUserDto.java',
        'service/LxmQueryService.java',
      ],
    },
  ],
};
