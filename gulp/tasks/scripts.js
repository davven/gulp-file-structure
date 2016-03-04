var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var config = require('../config').scripts;
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');


gulp.task('scripts', function () {
    return gulp.src(config.src)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(config.dest));
});

gulp.task('scripts:uglify', function () {
    return gulp.src(config.src)
        .pipe(concat('app.js'))
        .pipe(uglify(config.uglify).on('error', gutil.log))
        .pipe(gulp.dest(config.dest));
});
