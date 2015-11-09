'use strict';
var gulp = require('gulp');

var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('sass', function() {
  gulp.src('./src/TwelvePrinciples/sass/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./src/TwelvePrinciples/css'));
});

gulp.task('default', function() {
  gulp.run('sass');

  gulp.watch('./src/TwelvePrinciples/sass/*.scss', function() {
    gulp.run('sass');
  });
});