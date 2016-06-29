import gulp from 'gulp' ;
import babel from 'gulp-babel';

const SOURCE = './app/**/*.js',
    TARGET = './build';

gulp.task('build', () => {
    return gulp.src(SOURCE)
        .pipe(babel({
            presets: ['es2015']
        })).pipe(gulp.dest(TARGET));
});
