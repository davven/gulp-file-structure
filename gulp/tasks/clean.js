var gulp = require('gulp');
var clean = require('gulp-clean');
var config = require('../config').app;

// Cleans the tmp & build directories
gulp.task('clean:before', function () {
    return gulp.src(
            [config.tmp]
        )
        .pipe(clean());

});

gulp.task('clean:after', function () {
    return gulp.src(config.tmp).pipe(clean());
});