// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: { exposeConfig: true, },
  css: [
    '~/assets/css/tailwind.css'
  ],

  // Gets injectet to every page
  app: {
    head: {
      title: "Nuxt App",
    }
  }
})
