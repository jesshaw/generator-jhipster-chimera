export function configApp() {
  return {
    async configApp({ application }) {
      Object.assign(application, {
        hipster: 'chamera1-512',
        hipsterBugTrackerLink: 'https://github.com/jesshaw/generator-jhipster-chimera/issues?state=open',
        hipsterBugTrackerProductName: 'lxm chimera',
        hipsterHomePageProductName: 'lxm chimera',
        hipsterStackOverflowProductName: 'lxm chimera',
        hipsterStackoverflowLink: '',
        hipsterName: 'lxm chimera GENERATOR',
        hipsterProductName: 'lxm chimera',
        hipsterProjectLink: 'https://github.com/jesshaw/generator-jhipster-chimera',
        hipsterDocumentationLink: '',
        hipsterChatProductName: 'lxm chimera',
        hipsterChatLink: '',
        hipsterTwitterUsername: 'lxm chimera',
        hipsterTwitterLink: '',
      });
    },
  };
}
