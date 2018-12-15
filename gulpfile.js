var gulp = require('gulp');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
var htmlmin = require('gulp-htmlmin');
var connect= require('gulp-connect'); 
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var del = require('del');
var miniimg = require('gulp-imagemin');
gulp.task('default',['minijs','sass','miniimg','minihtml','watch','connect']);
gulp.task('sass', function () {
    gulp.src('./app/static/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
});
gulp.task('minihtml', function () {
    gulp.src('./*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});
gulp.task('minijs', function () {
    gulp.src('./app/static/js/*.js')
    .pipe(babel({
            presets: ['@babel/env']
        }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload());
});
gulp.task('miniimg',function(){
    gulp.src('./app/static/images/*.*')
        .pipe(miniimg())
        .pipe(gulp.dest('dist/images'))
        .pipe(connect.reload())
})
gulp.task('connect', function() {
  connect.server({
  	root:'./dist',
  	port: '7777',
  	livereload:true
  });
});
gulp.task('watch',function(){
	gulp.watch('./app/static/sass/*.scss',['sass']);
	gulp.watch('./app/static/js/*.js',['minijs']);
	gulp.watch('./app/static/images/*.*',['miniimg']);
	gulp.watch('./*.html',['minihtml']);
});
gulp.task('clean', function () {
    del(['dist'])
});