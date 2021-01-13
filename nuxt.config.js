import fs from 'fs';
import Markdown from './parsers/markdown';
import { SECTION_MAP } from './helpers/config';

const DEV = process.env.NODE_ENV !== 'production';

export default {
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
    title: 'Numl Design – Universal UI Framework for Modern Web Interfaces',
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
        src: 'https://cdn.skypack.dev/numl@1.0.0-beta.17',
        // src: '/numl/index.js',
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
  css: [
    '~/assets/global.css',
    'codemirror/lib/codemirror.css',
    'codemirror/theme/cobalt.css',
    'codemirror/addon/hint/show-hint.css',
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/scheme-icon/index.client.js',
    '~/plugins/helpers/index.js',
    { src: '~/plugins/nuxt-codemirror/index.js', ssr: false },
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
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/proxy',
    '@nuxtjs/sitemap',
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
  proxy: DEV
    ? {
        '/api': { target: 'http://localhost:3030', ws: false },
      }
    : {},
  generate: {
    crawler: true,
    routes() {
      const routes = Object.keys(SECTION_MAP).reduce((routes, siteSection) => {
        const sections = SECTION_MAP[siteSection];

        routes.push({
          route: `/${siteSection}`,
        });

        const files = fs.readdirSync(`./content/${siteSection}`);

        files.forEach((file) => {
          if (file.endsWith('.md') && file !== 'introduction.md') {
            routes.push({
              route: `/${siteSection}/${file.replace('.md', '')}`,
            });
          }
        });

        sections.forEach((section) => {
          if (section.slug === 'introduction') return;

          const files = fs.readdirSync(
            `./content/${siteSection}/${section.slug}`
          );

          files.forEach((file) => {
            routes.push({
              route: `/${siteSection}/${section.slug}/${file.replace(
                '.md',
                ''
              )}`,
            });
          });
        });

        return routes;
      }, []);

      return routes;
    },
  },
  sitemap: {
    hostname: 'https://numl.design',
  },
  pwa: {
    manifest: {
      name: 'Numl.Design – Universal UI Framework',
      short_name: 'Numl.Design',
      description:
        'An open-source Library of Web Components and a Runtime CSS Framework for rapidly building UI that follows your Design System.',
      dir: 'ltr',
      lang: 'en',
      useWebmanifestExtension: false,
      background_color: '#444',
      theme_color: '#444',
    },
  },
};
