const browserSync = require('browser-sync').create();
const { watch, parallel } = require('gulp');

module.exports = function serve() {
  browserSync.init({
    server: "./dist",
    host: '192.168.1.34',
    port: 3308,
  });

  watch('./src/**/*.sass', parallel('sass')).on('change', browserSync.reload);
  watch('./src/**/*.html', parallel('html')).on('change', browserSync.reload);
}
