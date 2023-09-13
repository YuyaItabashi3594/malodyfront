// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss",'@vueuse/nuxt','@nuxt/content','@nuxtjs/i18n'],
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  devtools: { enabled: true },
  i18n: {
    vueI18n: '/plugins/i18n.ts'
  }
})
