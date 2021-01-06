const withPlugins = require('next-compose-plugins')
const withOffline = require('next-offline')

const defaultConfig = {
  target: 'serverless',
  images: {
    domains: ['d33wubrfki0l68.cloudfront.net'] // Kofi
  },
  webpack: (config) => {
    return config
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
