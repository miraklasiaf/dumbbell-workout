const withPlugins = require('next-compose-plugins')
const withOffline = require('next-offline')

const defaultConfig = {
  target: 'serverless',
  webpack: (config) => {
    return {
      ...config,
      externals: [...config.externals, 'sharp']
    }
  },
  experimental: {
    optimizeFonts: true,
    optimizeImages: true
  },
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  }
}

module.exports = withPlugins([withOffline], defaultConfig)
