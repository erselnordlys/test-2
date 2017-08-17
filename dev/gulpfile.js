const gulp          = require('gulp');
const del           = require('del');
const autoprefixer  = require('gulp-autoprefixer');
const csslint       = require('gulp-csslint');

gulp.task('build-style', function () {
   del.sync('build/style');
   gulp.src('dev/*.css')
       .pipe(autoprefixer(['last 2 versions', '> 1%', 'ie 10'], { cascade: true }))
       .pipe(csslint( {
           'compatible-vendor-prefixes': false
       }))
       .pipe(csslint.formatter())
       .pipe(gulp.dest('build/style'));

});