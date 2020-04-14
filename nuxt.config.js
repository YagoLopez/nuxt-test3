export default {

  // mode: 'universal',
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    noscript: [
      { innerHTML: 'Javascript is needed to run this app', body: true }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'green' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/infiniteloading', mode: 'client'}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',

  ],
  tailwindcss: {
    configPath: 'tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css',
    purgeCSSInDev: true,
    exposeConfig: false
  },
  // purgeCSS: {
  //   content: ['./pages/index.vue'],
  //   whitelist: ['/*/'],
  // },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    // proxyHeaders: false
  },

  /*
  ** Build configuration
  */
  build: {
    buildDir: 'dist-local',
    analyze: false,
    transpile: ['vuex-module-decorators'],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  vue: {
    config: {
      productionTip: true,
      devtools: false
    }
  }


}
