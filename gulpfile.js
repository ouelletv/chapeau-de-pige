const gulp          = require("gulp");
const sass          = require('gulp-sass');
const autoprefixer  = require('gulp-autoprefixer');
const rename        = require('gulp-rename');
const cleanCSS      = require('gulp-clean-css');
const path          = require('path');
const svgstore      = require('gulp-svgstore');
const svgmin        = require('gulp-svgmin');
const webserver     = require('gulp-webserver');


gulp.task('watch', function(){
  gulp.watch('./app/assets/stylesheets/source/**/*.+(sass|scss)', ['styles']);
})

gulp.task('styles', function() {
  gulp.src('./app/assets/stylesheets/source/**/*.+(sass|scss)')
    .pipe(sass.sync({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer('last 30 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(cleanCSS())
    .pipe(rename(function (path) {
      path.dirname += "/";
      path.extname = ".css";
    }))
    .pipe(gulp.dest('./app/assets/stylesheets/'));
})

gulp.task('svgstore', function(){
  return gulp
      .src('./app/assets/images/svg-store/*.svg')
      .pipe(svgmin(function (file) {
          var prefix = path.basename(file.relative, path.extname(file.relative));
          return {
              plugins: [{
                  cleanupIDs: {
                      prefix: prefix + '-',
                      minify: true
                  }
              }]
          }
      }))
      .pipe(svgstore({ inlineSvg: true }))
      .pipe(rename(function (path) {
        path.dirname += "/";
        path.basename = "svg-sprite"
      }))
      .pipe(gulp.dest('./app/assets/images'));
});

gulp.task('webserver', function() {
  gulp.src('dist')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});
