// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["./app/styles/global.scss"],
  modules: ["@nuxt/image"],
  typescript: {
    strict: true,
  },
  // image: {
  //   // The screen sizes predefined by `@nuxt/image`:
  //   screens: {
  //     xs: 320,
  //     sm: 640,
  //     md: 768,
  //     lg: 1024,
  //     xl: 1280,
  //     xxl: 1536,
  //     "2xl": 1536,
  //   },
  // },
});
