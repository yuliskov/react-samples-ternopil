var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var initial = require('postcss-initial')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    './app/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new ExtractTextPlugin('style.css', {
      publicPath: '/'
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      },
      __DEV__: false
    })
  ],
  resolve: {
    root: path.join(__dirname, 'app')
  },
  postcss: [autoprefixer(), initial()],
  module: {
    loaders: [
      {
        test: /\.(js)x?$/,
        loaders: ['babel'],
        include: path.join(__dirname)
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!postcss-loader!stylus-loader'
        )
      }
    ]
  }
}
