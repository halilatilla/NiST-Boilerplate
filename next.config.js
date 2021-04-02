const nextTranslate = require('next-translate')
const withPWA = require('next-pwa')
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const nextConfig = phase => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER

  return {
    pwa: {
      dest: 'public',
      disable: isDev
    },
    webpack: config => {
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              configFile: 'svgr.config.js'
            }
          }
        ]
      })
      return config
    }
  }
}

module.exports = phase => nextTranslate(withPWA(nextConfig(phase)))
