export default defineAppConfig({
  docus: {
    title: 'HotSpot Tools',
    description: 'HotSpot Tools by Krystian Duma',
    url: 'https://hotspot-tools.duma.sh/',
    // image: '/social-card-preview.png',
    socials: {
      github: 'kduma-hotspot-tools',
    },
    github: {
      root: 'content',
      edit: true,
      contributors: true,
      owner: 'kduma-hotspot-tools',
      repo: 'hotspot-tools.duma.sh',
      branch: 'main',
    },
    aside: {
      level: 1,
      exclude: []
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: []
    },
    footer: {
      credits: {
        icon: false,
        text: 'Created by Krystian Duma',
        href: 'https://krystian.duma.sh',
      },
      // iconLinks: [
      //   {
      //     label: 'NuxtJS',
      //     href: 'https://nuxtjs.org',
      //     icon: 'IconNuxtLabs',
      //   },
      //   {
      //     label: 'Vue Telescope',
      //     href: 'https://vuetelescope.com',
      //     icon: 'IconVueTelescope',
      //   },
      // ],
    }
  }
})