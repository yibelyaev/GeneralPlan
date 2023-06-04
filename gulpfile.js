import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-dart-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csso from 'postcss-csso';
import rename from 'gulp-rename';
import terser from 'gulp-terser';
import squoosh from 'gulp-libsquoosh';
import svgo from 'gulp-svgmin'
import svgostore from 'gulp-svgstore';
import {deleteAsync} from 'del';
import browser from 'browser-sync';
import htmlmin from 'gulp-htmlmin';

// Styles

export const styles = () => {
  return gulp.src('src/sass/style.scss', { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css', { sourcemaps: '.' }))
    .pipe(browser.stream());
}
// HTML

const html = () => {
  return gulp.src('src/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('build'));
}

// Scripts

const scripts = () => {
  return gulp.src('src/js/**/*.js')
  .pipe(terser())
  .pipe(gulp.dest('build/js'))
}

// Images

const optimizeImages = () => {
  return gulp.src('src/images/*.{png,jpg,svg}')
  .pipe(squoosh())
  .pipe(gulp.dest('build/images'))
}

const copyImages = () => {
  return gulp.src('src/images/*.{png,jpg,svg}')
  .pipe(gulp.dest('build/images'))
}

// WebP

const createWebp = () => {
  return gulp.src('src/images/*.{png,jpg}')
  .pipe(squoosh({
    webp: {}
  }))
  .pipe(gulp.dest('build/images'))
}

// // SVG

const svg = () => {
  return gulp.src(['src/images/*.svg', '!src/images/icons/*.svg'])
  .pipe(svgo())
  .pipe(gulp.dest('build/images'));
}

const sprite = () => {
  return gulp.src('src/images/icons/*.svg')
  .pipe(svgo())
  .pipe(svgostore({
    inlineSvg: true
  }))
  .pipe(rename('sprite.svg'))
  .pipe(gulp.dest('build/images'));
}

// Copy

const copy = (done) => {
  gulp.src([
    'src/fonts/*.{woff2,woff}',
    'src/*.ico',
    'src/manifest.json'
  ], {
    base: 'src'
  })
  .pipe(gulp.dest('build'))
  done();
}

// Clean

const clean = () => {
  return deleteAsync('build');
}

// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

// Reload

const reload = (done) => {
  browser.reload();
  done();
}


// Watcher

const watcher = () => {
  gulp.watch('src/sass/**/*.scss', gulp.series(styles));
  gulp.watch('src/js/**/*.js', gulp.series(scripts, reload));
  gulp.watch('src/*.html', gulp.series(html, reload))
  gulp.watch('src/images/icons/*.svg').on('change', svg, browser.reload);
}

// build

  export const build = gulp.series(
    clean,
    copy,
    optimizeImages,
    gulp.parallel(
      styles,
      html,
      scripts,
      svg,
      sprite,
      createWebp
    ),
  );


  export default gulp.series(
    clean,
    copy,
    copyImages,
    gulp.parallel(
      styles,
      html,
      scripts,
      svg,
      sprite,
      createWebp
    ),
    gulp.series(
      server,
      watcher
    ));
