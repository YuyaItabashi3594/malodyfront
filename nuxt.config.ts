// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss",'@vueuse/nuxt','@nuxt/content','@nuxtjs/i18n'],
  css: ["vuetify/lib/styles/main.sass", 
  "@mdi/font/css/materialdesignicons.css","@fortawesome/fontawesome-svg-core/styles.css"],
  devtools: { enabled: true },
  i18n: {
    vueI18n: '/plugins/i18n.ts'
  },
  build: {
    transpile: [
      "vuetify"
    ],
  },
})
