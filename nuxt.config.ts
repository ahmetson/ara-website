// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', "@nuxt/fonts"],
  shadcn: {
    prefix: '',
    componentDir: './components/shared/ui'
  },
  devtools: { enabled: true },
  app: {
    head: {
      title: "ARA",
      link: [
        { rel: 'icon', type: 'image/svg', href: '/ara_logo.svg' }
      ]
    }
  }
})
