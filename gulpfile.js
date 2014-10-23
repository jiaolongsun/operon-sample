var gulp = require('gulp'),
    tasks = require('gulp-load-plugins')(gulp);

var paths = {
  html: 'app/*.html',
  scss: ['assets/scss/**/*.scss'],
  coffee: ['assets/coffee/**/*.coffee'],
  concat: {
    structure: [
      'assets/vendor/angular/angular.js',
      'assets/vendor/angular-route/angular-route.js',
      'assets/vendor/angular-animate/angular-animate.js',
      'assets/vendor/modernizr/modernizr.js'
    ],
    app: [
      'assets/scripts/app.js',
      'assets/scripts/filters/*.js',
      'assets/scripts/services/*.js',
      'assets/scripts/controllers/*.js',
      'assets/scripts/directives/*.js'
    ]
  }
};

gulp.task('connect', tasks.connect.server({
  port: 3000,
  livereload: true,
  open: {
    browser: 'Google Chrome'
  }
}));

gulp.task('html', function(){
  return gulp.src(paths.html)
      .pipe(tasks.connect.reload());
});

gulp.task('scss', function(){
  return gulp.src(paths.scss)
      .pipe(tasks.sass({
        errLogToConsole: true
      }))
      .pipe(gulp.dest('app/css'))
      .pipe(tasks.connect.reload());
});

gulp.task('coffee', function(){
  return gulp.src(paths.coffee)
      .pipe(tasks.coffee({ bare: true}))
      .pipe(gulp.dest('assets/scripts'));
});


gulp.task('structure', function(){
  return gulp.src(paths.concat.structure)
    .pipe(tasks.concat('structure.js'))
    .pipe(gulp.dest('app/js'));
});

gulp.task('app', function(){
  return gulp.src(paths.concat.app)
    .pipe(tasks.concat('app.js'))
    .pipe(gulp.dest('app/js'))
    .pipe(tasks.connect.reload());
});

gulp.task('concat', ['structure', 'app']);

gulp.task('watch', function(){
  gulp.watch(paths.html, ['html']);
  gulp.watch(paths.scss, ['scss']);
  gulp.watch(paths.coffee, ['coffee', 'app']);
});

gulp.task('default', ['connect', 'concat', 'watch']);
gulp.task('build', ['scss', 'concat']);
