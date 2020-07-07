import colors from 'vuetify/es5/util/colors';

export default {
    server: {
        port: 3000,
    },
    env: {
        baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    },
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    mode: 'universal',
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: 'server',
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
        titleTemplate: '%s - ' + process.env.npm_package_name,
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || '',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    /*
     ** Global CSS
     */
    css: ['~/assets/scss/page-transition.scss'],
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: [],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],
    /*
     ** Nuxt.js modules
     */
    modules: ['nuxt-i18n'],
    /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
    vuetify: {
        customVariables: ['~/assets/scss/vuetify.scss'],
        theme: {
            dark: false,
            themes: {
                dark: {
                    primary: colors.pink,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3,
                },
                light: {
                    primary: colors.pink.base,
                    accent: colors.grey.darken3,
                    secondary: colors.purple.base,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3,
                },
            },
        },
    },
    /*
     *
     * i18n module. Multilanguage properties.
     *
     */
    i18n: {
        locales: ['en', 'es'],
        defaultLocale: 'en',
        vueI18n: {
            fallbackLocale: 'en',
            messages: {
                en: require('./locales/en.json'),
                es: require('./locales/es.json'),
            },
        },
    },
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {
        extend(config, ctx) {
            if (ctx.isDev) {
                config.devtool = ctx.isClient
                    ? 'source-map'
                    : 'inline-source-map';
            }
        },
    },
    router: {
        extendRoutes(_routes, _resolve) {
            console.log('[nuxt.config.router.extendsRoutes]');
            // resolve();
        },
        middleware: ['all.middleware'],
    },
};
