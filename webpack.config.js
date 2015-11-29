'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development'
const webpack = require('webpack');


module.exports = {
  entry: "./src/app",
  output: {
      filename: __dirname +  "/build.js",
      library: 'app'
  },

  watch: NODE_ENV === 'development',

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: NODE_ENV === 'development'? 'cheap-inline-module-source-map' : null,

  plugins: [
      new webpack.DefinePlugin({
          NODE_ENV: NODE_ENV
      })
  ],

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions:         ['', '.js']
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates:    ['*-loader', '*`'],
    extensions:         ['', '.js']
  },

  module: {
      loaders: [{
        test:   /\.js$/,
        loader: 'babel?optional[]=runtime'
      }]
  }
} 