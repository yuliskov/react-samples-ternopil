require('babel-register')
require('babel-polyfill')

if (process.env.NODE_ENV === 'production') {
  require('./ssr-server')
} else {
  require('./devServer')
}
