var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    path = require('path');


// ------------------------------------------


// paths
var paths = {
  scripts: ['src/js/**/*.js']
};

gulp.task('scripts', function() {
  return gulp.src([
    './src/js/handle.js'
    ])
    .pipe(concat('jquery.srcset.js'))
    // This will output the non-minified version
    .pipe(gulp.dest('./dist/js'))
    .pipe(gulp.dest('./'))
    // This will minify and rename to foo.min.js
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./dist/js'))
    .pipe(gulp.dest('./'));
});

// ------------------------------------------


// The default task (called when you run `gulp` from cli)
gulp.task('default', ['scripts']);
