const { series, task } = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.default = series(
  exports.html = tasks.html,
  exports.sass = tasks.sass,
  exports.font = tasks.font,
  exports.image = tasks.image,
  exports.js = tasks.js,
);

exports.serve = tasks.serve;
