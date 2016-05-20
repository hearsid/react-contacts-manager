var gulp = require('gulp');
var browserSync = require('browser-sync');
var server = require('gulp-live-server');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('serve',  function () {

    browserSync.init({
        notify: false,
        port: 3000,
        server: {
            baseDir: [""],
            routes: {
                '/public/components': 'bower_components'
            }
        }
    });


    gulp.watch(['**'])
        .on('change', browserSync.reload);
});

gulp.task('test-browser', function () {

    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true ,
        reporters : ['mocha']
    });

});

gulp.task('serve-test', function () {

    browserSync.init({
        notify: false,
        port: 8081,
        server: {
            baseDir: ["test", "app"],
            routes: {
                '/public/components': 'bower_components'
            }
        }
    }) ;




    gulp.task('browserify', function() {
        browserify('./src/js/main.js')
            .transform('reactify')
            .bundle()
            .pipe(source('main.js'))
            .pipe(gulp.dest('dist/js'));
    });

    gulp.task('copy',function() {
        gulp.src('src/index.html')
            .pipe(gulp.dest('dist'));
        gulp.src('src/assets/**/*.*')
            .pipe(gulp.dest('dist/assets'));
    });

    gulp.task('default',['browserify', 'copy'], function() {
        return gulp.watch('src/**/*.*', ['browserify', 'copy'])
    });


    gulp.watch(['app/**/*.*'])
        .on('change', browserSync.reload);
});