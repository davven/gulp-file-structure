var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build:dev', function () {
    runSequence('clean:before', ['scripts', 'sass',  'copy'], /*'bower',*/ /*'revision', 'inject',*/ 'clean:after');
});

gulp.task('build', function () {
    runSequence('clean:before', ['scripts:uglify', 'sass', 'copy'], /*'bower',*/ /*'revision', 'inject',*/ 'clean:after', 'production:js');
});





