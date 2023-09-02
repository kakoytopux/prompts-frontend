const { src, dest } = require('gulp');
const imagemin = require('gulp-imagemin');

module.exports = function image() {
  return src('./src/images/**/*')
  .pipe(imagemin())
  .pipe(dest('./dist/images'));
}
