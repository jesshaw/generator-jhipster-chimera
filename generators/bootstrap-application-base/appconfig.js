export function configApp() {
  return {
    async configApp({ application }) {
      Object.assign(application, {
        // hipster: 'jhipster_family_member_4',
        hipsterBugTrackerLink: 'https://github.com/jesshaw/generator-jhipster-chimera/issues?state=open',
        hipsterBugTrackerProductName: 'lxm chimera',
        hipsterHomePageProductName: 'lxm chimera',
        hipsterStackOverflowProductName: 'lxm chimera',
        hipsterName: 'lxm chimera GENERATOR',
        hipsterProductName: 'lxm chimera',
        hipsterProjectLink: 'https://github.com/jesshaw/generator-jhipster-chimera',
        hipsterChatProductName: 'lxm chimera',
        hipsterTwitterUsername: 'lxm chimera',
        hipsterChatLink: '',
      });
    },
  };
}
