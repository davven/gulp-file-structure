var gulp = require('gulp');
var handleErrors = require('../util/handleErrors');
var config = require('../config').sass;

gulp.task('watch', function () {
	gulp.watch(config.src, ['sass']);
});