// https://nuxt.com/docs/api/configuration/nuxt-config
import { existsSync, readFileSync } from "node:fs";

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
  vite: {
    vue: {
      script: {
        fs: {
          fileExists(file: string) {
            return existsSync(file);
          },
          readFile(file: string) {
            return readFileSync(file, "utf-8");
          },
        },
      },
    },
  },
})
