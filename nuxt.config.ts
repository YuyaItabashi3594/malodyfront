// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss",'@vueuse/nuxt','@nuxt/content'],
  css: ["vuetify/lib/styles/main.sass", 
  "@mdi/font/css/materialdesignicons.css","@fortawesome/fontawesome-svg-core/styles.css"],
  devtools: { enabled: true },
  build: {
    transpile: [
      "vuetify"
    ],
  },
})
