import { appDescription } from './shared/constants'

// '@vite-pwa/nuxt'
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/icon',
    'dayjs-nuxt',
    '@nuxt/fonts',
    '@peterbud/nuxt-query',
  ],

  ssr: true,

  imports: {
    presets: [
      {
        from: '@vueuse/core',
        imports: [
          'useSessionStorage',
          'useScroll',
          'watchImmediate',
          'useElementVisibility',
          'useWindowScroll',
          'useLocalStorage',
          // ...
        ],
      },
    ],
  },

  devtools: {
    enabled: true,
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.svg', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
      ],
    },
  },

  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light',
    storage: 'cookie',
  },

  runtimeConfig: {
    public: {
      apiBase: '',
    },
  },
  build: {
    transpile: ['nuxt'],
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  compatibilityDate: '2024-07-22',

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: true,
      ignore: [],
    },
    experimental: {
      openAPI: true,
    },
  },

  logLevel: 'info',

  dayjs: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    plugins: ['utc', 'relativeTime'],
  },

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  // pwa,

  fonts: {
    defaults: {
      weights: [200, 400, 600, 800],
    },
  },

  i18n: {
    locales: [{
      code: 'en',
      file: 'en.json',
      language: 'en-US',
      // files: [{path: 'en.ts',cache: false}],
      name: 'English',
    }, {
      code: 'zh',
      file: 'zh.json',
      language: 'zh-CN',
      // files: [{path: 'zh.ts',cache: false}],
      name: '中文',
    }],
    baseUrl: '/',
    defaultLocale: 'en',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
    vueI18n: './config/i18n.ts',
  },

  nuxtQuery: {
    autoImports: ['useQuery', 'useQueryClient', 'useMutation'],
    devtools: true,
  },

  tailwindcss: {
    viewer: true,
    cssPath: './app/tailwind.scss',
    editorSupport: true,
  },
})
