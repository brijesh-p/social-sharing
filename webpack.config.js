var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/social-sharing.js',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'social-sharing.js',
    libraryTarget: 'var',
    library: 'SocialSharing'
  },
  module: {
    loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
        }
      }
    ]
  },
  cache: false,
  stats: {
    colors: true
  },
  devtool: 'source-map'
};