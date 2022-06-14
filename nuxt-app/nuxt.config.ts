import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
    head: {
        meta: [
          // <meta name="viewport" content="width=device-width, initial-scale=1">
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'author', content: 'Harvey Jiang' }
        ],
        script: [
          // <script src="https://myawesome-lib.js"></script>
          { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js' }
        ],

      }
    // plugins: [
    //     '~/plugins/gsap.min.js'

    // ]
    }
})

