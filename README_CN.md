# 凯米拉项目产生器

[![NPM 版本][npm-image]][npm-url]
[![产生器][github-generator-image]][github-generator-url]

<!-- [![集成测试][github-integration-image]][github-integration-url] -->

## 介绍

基于JHipster产生器自定义的一款项目产生器。

## 先决条件

由于这是JHipster蓝图，我们希望您已经安装了 JHipster 及其相关工具：

安装jhipster

```bash
npm install -g generator-jhipster
```

## 安装

要安装或更新此蓝图：

```bash
npm install -g generator-jhipster-chimera
```

## 用法

要使用此蓝图，请运行以下命令

```bash
jhipster --blueprints chimera
```

你可以通过运行来查找更新的 Chimera 蓝图特定选项

```bash
jhipster app --blueprints chimera --help
```

(blueprint option: chimera)并寻找

## 预发布

要使用未发布的版本，请使用 git 安装它。

```bash
npm install -g jhipster/generator-jhipster-chimera#main
jhipster --blueprints chimera --skip-jhipster-dependencies

# 本地项目安装到全局
npm install -g .

# 重新发布指定的版本

TAG='v1.4.3' MSG='Chimera generate filter for entities' && git push -d origin "${TAG}" && git tag -d "${TAG}" && git tag "${TAG}" -m "${MSG}" && git push origin "${TAG}"

```

## 开发

### 增加或生成子模块或模块阶段

注意：要空格键选中

若非首次生成进入.yo-rc.json增加对应模块和对应阶段执行`jhipster generate-blueprint`命令即可

```json
// .yo-rc.json
{
  "generator-jhipster": {
    "generators": {
      "languages": {
        "priorities": ["writing", "writingEntities"]
      }
    },
    "subGenerators": ["languages"]
  }
}
```

#### 恢复到生成前版本

.restorefiles中定义要恢复到生成前的版本文件，执行`bash ./resotre_files.sh`命令即可

### 运行

#### vscode下调式

1. 增加调试任务

   command中指定生成项目路径并连接对应的蓝本

   ```json
   // .vscode/tasks.json
   {
     // See https://go.microsoft.com/fwlink/?LinkId=733558
     // for the documentation about the tasks.json format
     "version": "2.0.0",
     "tasks": [
       {
         "label": "link generator",
         "type": "shell",
         "command": "cd $GENERATOR_PATH/chimera-sample ; npm link generator-jhipster-chimera"
       }
     ]
   }
   ```

1. 启动运行

   program中指定jhipster生成器命令行路径, cwd的路径与tasks.json指定的生成路径一致

   ```json
   // .vscode/launch.json
   {
     "version": "0.2.0",
     "configurations": [
       {
         "type": "node",
         "request": "launch",
         "name": "lxm chimera blueprint",
         "preLaunchTask": "link generator",
         "program": "$NODEJS_HOME/node_modules/generator-jhipster/dist/cli/jhipster.cjs",
         "args": [
           "jdl",
           // "-d",
           // "--skip-checks",
           "--skip-git",
           "--skip-cache",
           "--skip-install",
           "--blueprints",
           "chimera",
           "sample.jdl"
         ],
         "console": "integratedTerminal",
         "cwd": "$GENERATOR_PATH/chimera-sample"
       }
     ]
   }
   ```

1. 运行调试

#### 手动运行

先切换目录，否则会跟当前目录混在一起，引起混乱

```bash
cd text-lxm && jhipster --blueprints lxm jdl sample.jdl

## 单元测试
npm test

## 格式化后运行测试
npm run prettier-format & npm run test


yarn run prettier-format & yarn run test

## 安装当前版本的包到本地

npm install
```

### Q&A

#### 如何逐步开发子产生器（sub-generator）？

在.yo-rc.json增加`subGenerators`子产生器，执行`jhipster generate-blueprint`按需生成即可。

#### 有时候运行不了单元测试给出了警告？

确认js文件是否符合格式化要求，也可以执行`npm run prettier-format`进行格式化

#### jhipster blueprints中的各个子产生器（sub-generator）？

1. angular
2. app
3. base
4. base-application
5. base-core
6. base-entity-changes
7. base-workspaces
8. bootstrap
9. bootstrap-application
10. bootstrap-application-base
11. bootstrap-application-client
12. bootstrap-application-server
13. bootstrap-workspaces
14. ci-cd
15. client
16. common
17. cucumber
18. cypress
19. docker
20. docker-compose
21. entities
22. entity
23. export-jdl
24. feign-client
25. gatling
26. generate-blueprint
27. git
28. gradle
29. heroku
30. info
31. init
32. java
33. jdl
34. kubernetes
35. kubernetes-helm
36. kubernetes-knative
37. languages
38. liquibase
39. maven
40. project-name
41. react
42. server
43. spring-boot
44. spring-cache
45. spring-cloud-stream
46. spring-data-cassandra
47. spring-data-couchbase
48. spring-data-elasticsearch
49. spring-data-mongodb
50. spring-data-neo4j
51. spring-data-relational
52. spring-websocket
53. upgrade
54. vue
55. workspaces

#### jhipster blueprints中的各个阶段？

1. initializing：初始化阶段，设置默认配置和选项，准备生成器的环境。
2. prompting：提示用户阶段，向用户提出问题并收集输入。
3. configuring：配置阶段，根据用户输入和默认选项配置项目。
4. composing：组合阶段，将其他子生成器或蓝图组合到当前生成器中。
5. loading：加载阶段，加载额外的配置和资源。
6. preparing：准备阶段，进行初步准备工作，如设置上下文等。
7. configuringEachEntity：配置每个实体阶段，设置每个实体的配置。
8. loadingEntities：加载实体阶段，加载实体定义。
9. preparingEachEntity：准备每个实体阶段，为每个实体准备生成数据。
10. preparingEachEntityField：准备每个实体字段阶段，为每个实体的字段准备生成数据。
11. preparingEachEntityRelationship：准备每个实体关系阶段，为每个实体的关系准备生成数据。
12. postPreparingEachEntity：每个实体准备完成后的阶段，进行额外的实体处理。
13. default：默认阶段，执行一些默认操作。
14. writing：写入阶段，将生成的文件写入磁盘。
15. writingEntities：写入实体阶段，将实体相关文件写入磁盘。
16. postWriting：写入完成后的阶段，进行额外的处理。
17. postWritingEntities：写入实体完成后的阶段，进行额外的实体处理。
18. loadingTranslations：加载翻译阶段，加载多语言翻译文件。
19. install：安装阶段，安装依赖包，如运行 npm install 或 yarn install。
20. postInstall：安装完成后的阶段，进行安装后的处理。
21. end：结束阶段，清理工作，生成器完成。

#### 最新版有什么参考示例？

https://github.com/jhipster/generator-jhipster-micronaut

https://github.com/jhipster/jhipster-dotnetcore/blob/main/generators/blazor/generator.js#L35

[npm-image]: https://img.shields.io/npm/v/generator-jhipster-chimera.svg
[npm-url]: https://npmjs.org/package/generator-jhipster-chimera
[github-generator-image]: https://github.com/jesshaw/generator-jhipster-chimera/actions/workflows/generator.yml/badge.svg
[github-generator-url]: https://github.com/jesshaw/generator-jhipster-chimera/actions/workflows/generator.yml
[github-integration-image]: https://github.com/jhipster/generator-jhipster-chimera/actions/workflows/integration.yml/badge.svg
[github-integration-url]: https://github.com/jhipster/generator-jhipster-chimera/actions/workflows/integration.yml

#### maven中如何修改为yarn客户端

就算指定了客户端为yarn,也不会生产yarn管理的客户端，推荐手动指定,全文搜索npm替换为yarn，以下为部分示例如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project>
  <properties>
    <yarn.version>v1.22.22</yarn.version>
  </properties>
  <profiles>
    <profile>
      <id>webapp</id>
      <build>
        <plugins>
          <plugin>
            <groupId>com.github.eirslett</groupId>
            <artifactId>frontend-maven-plugin</artifactId>
            <executions>
              <execution>
                <id>install-node-and-yarn</id>
                <goals>
                  <goal>install-node-and-yarn</goal>
                </goals>
              </execution>
              <execution>
                <id>yarn install</id>
                <goals>
                  <goal>yarn</goal>
                </goals>
              </execution>
            </executions>
          </plugin>
        </plugins>
      </build>
    </profile>
  </profiles>
</project>
```
