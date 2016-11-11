const gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    watch = require('gulp-watch');

gulp.task('lint', function() {
  return gulp.src('./core/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('watch', function() {
     return watch('./core/*.js', function() {
        gulp.run('lint');
     });
});
