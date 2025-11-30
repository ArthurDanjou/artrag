export default defineNuxtConfig({

  modules: [
    '@nuxthub/core',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxtjs/mcp-toolkit'
  ],

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
  experimental: {
    asyncContext: true
  },
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
    cache: true
  },

  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
        commaDangle: 'never'
      }
    }
  },

  mcp: {
    name: 'ArtMCP',
    version: '1.0.0'
  }
})
