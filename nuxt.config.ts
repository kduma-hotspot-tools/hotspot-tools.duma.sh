export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  content: {
    highlight: {
      preload: ['diff', 'json', 'js', 'ts', 'css', 'shell', 'html', 'md', 'yaml', 'php', 'csharp', 'python']
    },
  }
})