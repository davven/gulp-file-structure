var gulp = require('gulp');
var config = require('../config').app;
var runSequence = require('run-sequence');
var debug = require('gulp-debug');
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');


gulp.task('production:html', function () {
    gulp.src(config.src + '/index.html')
        .pipe(minifyHTML({
            quotes: true
        }))

        .pipe(gulp.dest(config.dest))
    ;
});
gulp.task('production:js', function () {
    gulp.src(config.bower.js + 'bower.js')
        .pipe(uglify(config.uglify))
        .pipe(gulp.dest(config.bower.js))
    ;
});

