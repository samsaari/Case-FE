var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('./src/scss/app.scss')
  .pipe(sass({outputStyle: 'uncompressed'}).on('error', sass.logError))
  .pipe(concat('app.css')
  )
  .pipe(gulp.dest('./dist/css'));
});

gulp.task('js', function() {
  return gulp.src('./src/js/app.js')
  .pipe(concat('app.js'))
  .pipe(gulp.dest('./dist/js'));
});

gulp.task('watch', function() {
  gulp.watch('./src/scss/**/*.scss', ['sass']);
  gulp.watch('./src/js/**/*.js', ['js']);
});

gulp.task('default', ['sass', 'js', 'watch']);
