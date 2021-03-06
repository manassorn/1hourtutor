const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 9950,
  
    historyApiFallback: { index: 'dist/index.html' },
    proxy: {
      '/api': 'https://1hourtutor.com',
    },
  }
});