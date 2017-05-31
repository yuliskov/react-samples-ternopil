var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var initial = require('postcss-initial')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './app/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        context: './app/index',
        postcss: [ // <---- postcss configs go here under LoadOptionsPlugin({ options: { ??? } })
          autoprefixer(), initial()
        ]
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      },
      __DEV__: true
    })
  ],
  resolve: {
    modules: [
      path.join(__dirname, 'app'),
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        use: 'babel-loader'
      },
      {
        test: /\.styl$/,
        use: [{loader: 'style-loader'}, {loader: 'css-loader'}, {loader: 'postcss-loader'}, {loader: 'stylus-loader'}]
      }
    ]
  }
}
