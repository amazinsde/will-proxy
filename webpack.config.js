var path = require('path');
var SRC_DIR = path.join(__dirname, '/components');
var DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  externals : {
    React: 'react',
    ReactDOM: 'react-dom'
  },
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        use: {
        loader : 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
      }
    ]
  }
};