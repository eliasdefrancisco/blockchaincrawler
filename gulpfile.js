const gulp = require('gulp')
const browserSync = require('browser-sync').create() // .create() !!!
const browserify = require('browserify')
const babelify = require('babelify')
const sass = require('gulp-sass')
const runSequence = require('run-sequence')
const del = require('del')
const source = require('vinyl-source-stream')
const stringify = require('stringify')


gulp.task('browserSync', function(){
  browserSync.init({
    server: 'www',
    notify: false
  })
})

gulp.task('browserSyncReload', function(){
  browserSync.reload()
})

gulp.task('copyFiles', function(){
  return gulp.src('src/index.html')
    .pipe(gulp.dest('www'))
})

gulp.task('styles', function(){
  return gulp.src('src/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('www'))
})

gulp.task('browserify', function() {
  return browserify({
      entries: 'src/main.js',
      debug: true })
    .transform(stringify, { appliesTo: ['.html'] })
    .transform(babelify, { presets: ['es2015'] })
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('www'))
})

gulp.task('clean', function() {
    return del([
      'www/**',
      '!www',
      '!www/vendor',
      '!www/vendor/**'
    ])
})

gulp.task('build', function(callback) {
    return runSequence('clean', ['browserify', 'styles', 'copyFiles'], callback)
})

gulp.task('run', function(callback){
  return runSequence('build', 'browserSync', callback)
})

gulp.task('reloadDevelop', function(callback){
  return runSequence('build', 'browserSyncReload', callback)
})

gulp.task('develop', function(callback){
  // Infinite loop for watching files ...
  gulp.watch([
      'src/**/*.html',
      'src/**/*.js',
      'src/assets/**/*',
      'src/**/*.scss'
    ],
    ['reloadDevelop']
  )
  return runSequence('build', 'browserSync', callback)
})

// Default task when gulp is executed by the system
gulp.task('default', ['develop'])




///
