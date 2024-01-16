// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "iBehzadi | Articles",
      meta: [
        { name: "description", content: "My first web site made with nuxt3" },
      ],
      link: [
        {rel: 'stylesheet', href : 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    },
    // baseURL: '/gh-pages/',
    // buildAssetsDir: 'assets'
  },

  runtimeConfig: {
    weatherKey : process.env.WEATHER_API_KEY,
  },
  devtools: { enabled: false },
  // typescript: { shim: false },
  css: ["~/assets/css/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-icon"],
  alias: {
    "@": resolve(__dirname, "/"),
  },
});
