import Markdown from './parsers/markdown';

const DEV = process.env.NODE_ENV !== 'production';

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    htmlAttrs: {
      lang: 'en',
      'data-nu-icons': 'eva',
      'data-nu-prevent': '',
    },
    title:
      'Numl Design – A complete solution for creating modern web interfaces',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    script: [
      {
        // src: 'https://cdn.skypack.dev/numl@1.0.0-beta.2',
        src: '/numl/index.js',
        type: 'module',
      },
    ].concat(
      !DEV
        ? [
            // {
            //   src: 'https://c6.patreon.com/becomePatronButton.bundle.js',
            // },
            // {
            //   src: 'https://platform.twitter.com/widgets.js',
            // },
          ]
        : []
    ),
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        media: '(prefers-color-scheme:light)',
        sizes: '32x32',
        href: '/nude-logo-32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        media: '(prefers-color-scheme:light)',
        sizes: '16x16',
        href: '/nude-logo-16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        media: '(prefers-color-scheme:dark)',
        sizes: '32x32',
        href: '/nude-logo-32-dark.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        media: '(prefers-color-scheme:dark)',
        sizes: '16x16',
        href: '/nude-logo-16-dark.png',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Roboto+Mono&display=swap',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/global.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/scheme-icon/index.client.js',
    '~/plugins/helpers/index.js',
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-172527749-1',
      },
    ],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    extendParser: {
      '.md': Markdown,
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  // generate: {
  //   routes() {
  //     return [{
  //       route: '/storybook/test',
  //
  //     }];
  //   },
  // },
};
