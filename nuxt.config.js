const routerBase = process.env.DEPLOY_ENV === 'WITH_SUBFOLDER'
  ? {
      router: {
        base: '/usaid-c19/'
      }
    }
  : {}
export default {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Covid-19 Response Visualisation',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A prototype visualisation to track the Covid-19 response.' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@devinit' },
      { name: 'twitter:title', content: 'Covid-19 Response Visualisation' },
      { name: 'twitter:description', content: 'A prototype visualisation to track the Covid-19 response' },
      { name: 'twitter:image', content: 'https://covid19.humportal.org/visualisation.png' },
      { name: 'twitter:image:alt', content: 'Contributions to the Covid-19 emergency.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    htmlAttrs: {
      lang: 'en'
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ffffff', height: '5px' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-vue-select',
    '@nuxtjs/markdownit'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  buildModules: [
    [
      '@nuxtjs/gtm'
    ],
    // LINTING
    // Doc: https://github.com/nuxt-community/eslint-module
    // Comment out the below 3 lines to disable linting
    ['@nuxtjs/eslint-module', {
      fix: true
    }]
  ],
  gtm: {
    id: 'GTM-KHMLMZX'
  },
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.externals = {
        moment: 'moment'
      }
    }
  },
  ...routerBase
}
