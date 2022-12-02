var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  externals: {
    react: 'commonjs react'
  }
};

// var webpack = require('webpack');
// var path = require('path');
//
// var BUILD_DIR = path.resolve(__dirname, 'demo');
// var APP_DIR = path.resolve(__dirname, 'src');
//
// var config = {
//   entry: APP_DIR + '/demo.js',
//   output: {
//     path: BUILD_DIR,
//     filename: 'bundle.js'
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?/,
//         include: APP_DIR,
//         loader: 'babel-loader'
//       }
//     ]
//   }
// };
//
// module.exports = config;
