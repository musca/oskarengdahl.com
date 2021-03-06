var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var cleanCSS 	  = require('gulp-clean-css');
var include     = require('gulp-include');
var uglify      = require('gulp-uglify');
var sourcemaps  = require('gulp-sourcemaps');

var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};
var node_modules = [
	'node_modules/susy/sass/', 
	'node_modules/breakpoint-sass/stylesheets/'
];
/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
  browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
      .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});

gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')
    .pipe(include())
    .pipe(sourcemaps.init())     
      .pipe(uglify())
    .pipe(sourcemaps.write('maps'))
  .pipe(gulp.dest('dist/js'))
  .pipe(gulp.dest('_site/dist/js'))
  .pipe(browserSync.reload({stream:true}));
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
 return gulp.src('src/scss/*.scss')
  //.pipe(sourcemaps.init())
  .pipe(sass({includePaths: node_modules}).on('error', sass.logError))
  .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
  .pipe(cleanCSS())
  //.pipe(sourcemaps.write('maps'))  
  .pipe(gulp.dest('dist/css'))
  .pipe(gulp.dest('_site/dist/css'))
  .pipe(browserSync.stream());
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
  gulp.watch('src/scss/*.scss', ['sass']);
  gulp.watch(['src/js/*.js', 'src/vendor/*.js'], ['scripts']);
  gulp.watch(['index.html', 'blog/index.html', 'blog/archive/index.html', '_projects/*.md', '_includes/*.*', '_layouts/*.html', '_posts/*', '_data/*'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['scripts', 'sass', 'browser-sync', 'watch']);