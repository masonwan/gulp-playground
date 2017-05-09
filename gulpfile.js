const gulp = require('gulp')
const mocha = require('gulp-mocha')
const runSequence = require('run-sequence')
const batch = require('gulp-batch')

let isWatching = false

gulp
  .task('default', ['test'], () => {

  })

gulp
  .task('dev', () => {
    runSequence('build', 'test')
    isWatching = true
    gulp.watch('**/*.js', () => {
      runSequence('build', 'test')
    })
  })

gulp
  .task('build', () => {
    return new Promise((resolve) => {
      console.log(`Building`)
      setTimeout(() => resolve(), 1000)
    })
  })

gulp
  .task('test', () => {
    return gulp.src('test/**/*.js')
      .pipe(mocha())
      .once('error', function() {
        if (isWatching) {
          // Emitting `end` event instead so gulp will not kill process.
          this.emit('end')
        } else {
          process.exit(1)
        }
      })
  })
