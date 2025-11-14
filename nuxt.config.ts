export default defineNuxtConfig({
  modules: ['@nuxthub/core', '@nuxt/eslint', '@nuxt/content'],

  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  runtimeConfig: {
    public: {
      helloText: 'Hello from the Edge 👋'
    },
    discord: {
      userId: '',
      id: '',
      token: ''
    },
    statusPage: '',
    wakatime: {
      userId: '',
      coding: '',
      editors: '',
      languages: '',
      os: ''
    }
  },

  future: { compatibilityVersion: 4 },
  compatibilityDate: '2025-11-12',

  nitro: {
    experimental: {
      openAPI: true
    }
  },

  hub: {
    database: true,
    ai: true,
    analytics: true,
    kv: true,
    cache: true
  },

  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
        commaDangle: 'never'
      }
    }
  }
})
