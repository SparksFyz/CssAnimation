'use strict';
var gulp = require('gulp');

var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('sass', function() {
  gulp.src('./TwelvePrinciples/sass/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./TwelvePrinciples/css'));
});

gulp.task('button', function() {
  gulp.src('./checkbox/sass/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./checkbox/css'));
});

// gulp.task('default', function() {
//   gulp.run('sass');
//   gulp.run('button');

//   gulp.watch('./src/TwelvePrinciples/sass/*.scss', function() {
//     gulp.run('sass');
//   });
//   gulp.watch('./src/checkbox/sass/*.scss', function() {
//     gulp.run('button');
//   });
// });


gulp.task('watch', function() {
  gulp.watch('./TwelvePrinciples/sass/*.scss', ['sass']);
  gulp.watch('./checkbox/sass/*.scss', ['button']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'sass', 'button']);