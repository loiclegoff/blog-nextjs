const withPlugins = require('next-compose-plugins')

const withSvgr = (nextConfig = {}, _nextComposePlugins = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    },
  })
}

const rewrites = async () => [
  {
    destination: 'https://cdn.splitbee.io/sb.js',
    source: '/sb.js',
  },
  {
    destination: 'https://hive.splitbee.io/:slug',
    source: '/sb-api/:slug',
  },
]

module.exports = withPlugins([withSvgr], {
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
  rewrites,
})
