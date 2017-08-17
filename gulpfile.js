const gulp          = require('gulp');
const del           = require('del');
const autoprefixer  = require('gulp-autoprefixer');
const csslint       = require('gulp-csslint');


gulp.task('clear-build', function() {
    del.sync('build');
});


gulp.task('build-style', function () {
   del.sync('build/style.css');
   gulp.src('dev/*.css')
       .pipe(autoprefixer(['last 2 versions', '> 1%', 'ie 10'], { cascade: true }))
       .pipe(csslint( {
           'compatible-vendor-prefixes': false
       }))
       .pipe(csslint.formatter())
       .pipe(gulp.dest('build'));
});

gulp.task('build-images', function () {
    del.sync('build/images');
    gulp.src('dev/images/**/*')
        .pipe(gulp.dest('build/images'));
});

gulp.task('build-icons', function () {
    del.sync('build/icons');
    gulp.src('dev/icons/**/*')
        .pipe(gulp.dest('build/icons'));
});

gulp.task('build-js', function() {
    del.sync('build/scripts.js');
    gulp.src('dev/*.js')
        .pipe(gulp.dest('build'));
});

gulp.task('build-html', function () {
    del.sync('build/index.html');
    gulp.src('index.html')
        .pipe(gulp.dest('build'));
});

gulp.task('build', ['clear-build', 'build-style', 'build-images','build-icons', 'build-js', 'build-html']);