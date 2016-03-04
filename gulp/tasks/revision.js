var gulp = require('gulp');
var config = require('../config').app;
var rev = require('gulp-rev');

gulp.task('revision', function () {
    return gulp.src([
            config.tmp + '/css/*.css',
            config.tmp + '/js/*.js'
        ], { base: config.tmp })
		/*.pipe(rev())*/
		.pipe(gulp.dest(config.dest))
    ;
});