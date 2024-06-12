import vuetify from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  components: true,
  ssr: false,
  typescript: { shim: false },
  build: {
    transpile: ['vuetify'],
  },
  modules: [],
  vite: {
    ssr: {
      noExternal: ["vuetify"], // add the vuetify vite plugin
    },
  },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  generate: {
    fallback: true, // if you are using a SPA fallback, set this to true
  }
})
