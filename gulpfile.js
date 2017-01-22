const gulp = require('gulp');
const del = require('del');
const shell = require('gulp-shell');
const clean = require('gulp-clean');
const uglify = require('gulp-uglify');
const concatCss = require('gulp-concat-css');
const cleanCSS = require('gulp-clean-css');
const htmlreplace = require('gulp-html-replace');
const concatJs = require("gulp-concat");
const run = require('run-sequence');
const tscConfig = require('./tsconfig.json');
const Builder = require('systemjs-builder');
const builder = new Builder('', 'systemjs.config.js');

// Clean source .ts
gulp.task('clean:ts', function () {
    return gulp.src(['./app/**/*.js', './app/**/*.js.map'], { read: false })
        .pipe(clean());
});

// Compile source .ts
gulp.task('compile:ts', ['clean:ts'], shell.task([
    'tsc'
]));

// Bundle vendor.js
gulp.task('bundle:vendor', function () {
    return builder.buildStatic('app/vendor.js', 'build/vendor.min.js')
        .catch(function (err) { console.error('vendor.js bundle error! ' + err); });
});

// Bundle main.js
gulp.task('bundle:main', function () {
    return builder.buildStatic('app/main.js', 'build/main.min.js')
        .catch(function (err) { console.error('main.js bundle error! ' + err); });
});

// Concat css
gulp.task('concat:css', function () {
    var glob = ['resources/**/*.css', 'app/**/*.css'];
    return gulp
        .src(glob)
        .pipe(concatCss("build/styles.min.css"))
        .pipe(gulp.dest('.'));
});

// Concat js
gulp.task('concat:js', function () {
    return gulp.src('build/**.js')
        .pipe(concatJs("bundle.min.js"))
        .pipe(gulp.dest("build"));
});

// Minify css
gulp.task('minify:css', function () {
    return gulp.src('build/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('build'));
});

// Minify js
gulp.task('minify:js', function () {
    return gulp
        .src('build/**.js')
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

/**
 * BUILD TASKS
 */
gulp.task('clean', function () {
    return del('build/**/*');
});

gulp.task('compile', function (callback) {
    run('compile:ts', function () {
        callback();
    });
});

gulp.task('bundle', function (callback) {
    run('bundle:vendor', 'bundle:main', function () {
        callback();
    });
});

gulp.task('concat', function (callback) {
    run('concat:css', function () {
        callback();
    });
});

gulp.task('minify', function (callback) {
    run('minify:css', 'minify:js', function () {
        callback();
    });
});

gulp.task('remove', function () {
    del(['build/**/*', '!build/bundle.min.js', '!build/styles.min.css']);
});

gulp.task('replace', function () {
    gulp.src('index.html')
        .pipe(htmlreplace({
            'css': 'styles.min.css',
            'vendor': 'vendor.min.js',
            'main': 'main.min.js'
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('resources', function () {
    return gulp.src(['./resources/**/*'], { base: "." })
        .pipe(gulp.dest("build"));
});

gulp.task('build', function () {
    run('clean', 'compile', 'bundle', 'concat', 'minify', 'replace', 'resources');
});

gulp.task('default', function () {
    run('build');
});