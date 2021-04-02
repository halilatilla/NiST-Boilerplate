const path = require('path')

module.exports = {
  stories: ['../components/**/*.stories.js'],
  addons: [
    '@storybook/addon-essentials',
    'storybook-css-modules-preset',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ],
  webpackFinal: config => {
    const fileLoaderRule = config.module.rules.find(
      rule => rule.test && rule.test.test('.svg')
    )
    fileLoaderRule.exclude = /\.svg$/

    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      loader: require.resolve('@svgr/webpack')
    })

    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules']
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/components': path.resolve(__dirname, '../components'),
      '@/icons': path.resolve(__dirname, '../icons')
    }

    return config
  }
}
