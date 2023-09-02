const { src, dest } = require('gulp');
const sassMin = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const bulkSass = require('gulp-sass-bulk-import');
const browserSync = require('browser-sync');

module.exports = function sass() {
  return src('./src/**/*.sass')
  .pipe(bulkSass())
  .pipe(sassMin({ outputStyle: 'compressed' }).on('error', sassMin.logError))
  .pipe(autoprefixer())
  .pipe(concat('styles.css'))
  .pipe(dest('./dist/'))
  .pipe(browserSync.stream());
}
