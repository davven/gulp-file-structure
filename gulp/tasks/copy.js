var gulp = require('gulp');
var concat = require('gulp-concat');
var config = require('../config').app;
var gutil = require('gulp-util');
var bowerFiles = require('gulp-main-bower-files');
var rename = require('gulp-rename');


gulp.task('copy:views', function () {
    return gulp.src([config.src + '/views/**/*'])
        .pipe(gulp.dest('./views/'))
    ;
});

gulp.task('copy:vendor', function () {
	return gulp.src([config.src + '/js/vendor/**/*'])
        .pipe(gulp.dest(config.dest + '/js/vendor/'))
	;
});

gulp.task('copy:images', function () {
    return gulp.src([config.src + '/img/**/*'])
        .pipe(gulp.dest(config.dest + '/img/'))
    ;
});


gulp.task('copy:fonts', function () {
    return gulp.src(config.bower.src + '/font-awesome/fonts/**/*')
        .pipe(gulp.dest(config.dest + '/fonts'))
    ;
});

gulp.task('copy:favicon', function () {
    return gulp.src([config.src + '/favicon.ico'])
        .pipe(gulp.dest(config.dest))
    ;
});



gulp.task('copy', ['copy:favicon', 'copy:views', 'copy:vendor', 'copy:images']);


