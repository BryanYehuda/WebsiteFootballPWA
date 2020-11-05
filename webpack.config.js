const CopyPlugin = require('copy-webpack-plugin');
var WebpackPwaManifest = require('webpack-pwa-manifest')
const path = require('path'),
    htmlPlugin = require('html-webpack-plugin'),
    cleanPlugin = require('clean-webpack-plugin'),
    dist = 'dist',
    workboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  plugins: 
  [
    new CopyPlugin
    ({
      patterns: 
      [
        { from: 'src/images/**/*', to: 'dist/images/**/*' },
        { from: 'src/script/**/*', to: 'dist/script/**/*' },
        { from: 'src/style/**/*', to: 'dist/style/**/*' },
        { from: 'src/**/*', to: 'dist/**/*' },
      ],
    }),
    new WebpackPwaManifest({
    name: 'Football Watch - Watch Football Anywhere',
    short_name: 'Football Watch',
    description: 'Football Watch is a website that gives you all the information for you hardcore football fans!',
    background_color: '#14274e',
    crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
    icons: [
      {
        src: path.resolve('src/images/logo.png'),
        size: '512x512',
        purpose: 'maskable'
      },
      {
        src: path.resolve('src/images/logo72.png'),
        size: '72x72',
        purpose: 'maskable'
      },
      {
        src: path.resolve('src/images/logo96.png'),
        size: '96x96',
        purpose: 'maskable'
      },
      {
        src: path.resolve('src/images/logo128.png'),
        size: '128x128',
        purpose: 'maskable'
      },
      {
        src: path.resolve('src/images/logo144.png'),
        size: '144x144',
        purpose: 'maskable'
      },
      {
        src: path.resolve('src/images/logo192.png'),
        size: '192x192',
        purpose: 'maskable'
      },
      {
        src: path.resolve('src/images/logo256.png'),
        size: '256x256',
        purpose: 'maskable'
      },
      {
        src: path.resolve('dist/images/logo384.png'),
        size: '384x384',
        purpose: 'maskable'
      }
    ]
  }),
  new cleanPlugin([dist]),
  new htmlPlugin({
    filename: 'index.html',
    title: 'Football Watch'
  }),
  new workboxPlugin.GenerateSW({
    swDest: 'service-worker.js',
    clientsClaim: true,
    skipWaiting: true,
    runtimeCaching: [{
    urlPattern: new RegExp('https://www.football-data.org'),
    handler: 'StaleWhileRevalidate'
  }]
  })
  ]
}