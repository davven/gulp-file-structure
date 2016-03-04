var gulp = require('gulp');
var config = require('../config').app;
var mainBowerFiles = require('gulp-main-bower-files');

var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var notify = require('gulp-notify');
var debug = require('gulp-debug');
var gulpFilter = require('gulp-filter');

gulp.task('bower:js', function () {
    return gulp.src('./bower.json')
        .pipe(mainBowerFiles('**/*.js', {
            paths: {
                bowerDirectory: config.bower.src,
                bowerrc: config.bower.bowerrc,
                bowerJson: config.bower.bowerJson
            }
        }))
        .pipe(debug())
        .pipe(concat('bower.js'))
        .pipe(gulp.dest(config.bower.js))
});

gulp.task('bower:css', function () {
    return gulp.src('./bower.json')
        .pipe(mainBowerFiles('**/*.css', {
            paths: {
                bowerDirectory: config.bower.src,
                bowerrc: config.bower.bowerrc,
                bowerJson: config.bower.bowerJson
            }
        }))
        .pipe(debug())
        .pipe(minifyCSS({ keepBreaks: true }))
        .pipe(gulp.dest(config.bower.css))
});

gulp.task('bower', ['bower:js', 'bower:css']);