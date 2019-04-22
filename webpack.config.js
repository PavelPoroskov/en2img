const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
//const CompressionPlugin = require('compression-webpack-plugin');
// need tune web-server

module.exports = {
  mode: 'production',
  entry: './src/App.js',
  output: {
    filename: 'App.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }
    ]
  },
  plugins: [
      new CopyWebpackPlugin([
        { from: './index.html' }
      ]),
      // new CompressionPlugin()
  ]
}