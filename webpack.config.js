var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve('src'),
  devtool: "source-map",
  entry: {
    'hello-world': './app',
    'hello-world.min': './app'
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ],
  module: {
    preLoaders: [
      { test: /\.ts$/, loader: 'tslint' }
    ],
    loaders: [
      { test: /\.ts?$/, loader: 'ts-loader' }
    ]
  },
  tslint: {
    configuration: require('./tslint.json')
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  }
};
