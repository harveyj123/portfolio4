// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: "Harvey Jiang | Portfolio",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Harvey Jiang's Portfolio Site",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
    },
  },

  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },

  modules: [
    "nuxt-icon",
    "@nuxt/image",
    [
      "nuxt-mail",
      {
        message: {
          to: "harveyjiang11@gmail.com",
          
        },
        smtp: {
          service: 'gmail',
          auth: {
            user: process.env.EMAIL,
            pass:  process.env.EMAIL_PASS,
          },
        },
      },
    ],
  ],
});
