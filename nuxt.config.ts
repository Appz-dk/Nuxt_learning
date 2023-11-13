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
      meta: [
        {
          name: "description", content: "Learning about Nuxt 3"
        }
      ],
      link: [
        {
          rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons"
        }
      ]
    }
  }
})
