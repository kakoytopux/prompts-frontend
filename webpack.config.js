const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './scripts/index.js',
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  watch: false,
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ],
  },
};