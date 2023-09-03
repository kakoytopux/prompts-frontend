const { src, dest } = require('gulp');
const webpack = require('webpack-stream');

module.exports = function js() {
  return src('./src/scripts/index.js')
  .pipe(webpack(require('../webpack.config.js')))
  .pipe(dest('./dist/'));
}
