const { src, dest } = require('gulp');

module.exports = function font() {
  return src('./src/vendor/fonts/*/**')
  .pipe(dest('./dist/fonts'))
}
