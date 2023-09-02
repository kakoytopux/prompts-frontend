const { dest, src } = require('gulp');
const htmlmin = require('gulp-htmlmin');
const replace = require('gulp-replace');

module.exports = function html() {
  return src('./src/*.html')
  .pipe(replace('<!-- css -->', '<link rel="stylesheet" href="./styles.css">'))
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(dest('./dist/'));
}
