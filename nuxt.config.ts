// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["./app/styles/global.scss"],
  modules: ["@nuxt/image"],
  typescript: {
    strict: true,
  },
});
