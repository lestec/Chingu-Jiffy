const path = require('path');
const webpack = require('webpack');

//plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './app/app.js'
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app_bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader' ]}
    ], //end of loaders
  },//end of module

  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'app/components/'),
      Containers: path.resolve(__dirname, 'app/containers/'),
      Utils: path.resolve(__dirname, 'app/utils/'),
      Router: path.resolve(__dirname, 'app/router/')
    },
    extensions: ['*', '.js', '.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  devtool: 'cheap-module-eval-source-map',

  devServer: {
    hot: true,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },

  watch: true,

  watchOptions: {
    ignored: /node_modules/
  }

}//end of module exports
