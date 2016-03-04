var gulp = require('gulp');
var config = require('../config').app;
var debug = require('gulp-debug');
//var order = require("gulp-order");
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyHTML = require('gulp-minify-html'),
    bowerFiles = require('gulp-main-bower-files'),
    inject = require('gulp-inject')
    es = require('event-stream')
;


gulp.task('inject', function () {
    gulp.src(config.src + '/views/layout.jade')
        .pipe(
            inject(
                gulp.src(config.bower.js.dest + 'bower.js', { read: false }),
                { name: 'bower', addRootSlash: true, ignorePath: 'dist' })
                

        )
        .pipe(
            inject(
                gulp.src(config.bower.css.dest + '**/*.css', { read: false }),
                { name: 'bower', addRootSlash: true, ignorePath: 'dist' })

        )
        .pipe(
            inject(
                es.merge(
                    gulp.src(config.theme + '/css/*.css', { read: false, base: config.theme }),
                    gulp.src(config.theme + '/js/*.js', { read: false, base: config.theme })
                ),
                { addRootSlash: true, ignorePath: 'dist' }
            )
        )
       
        .pipe(gulp.dest('./views/'))
    ;
});
