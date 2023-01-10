const { src, dest, watch, parallel } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const concat = require('gulp-concat')
const browserSync = require('browser-sync').create()

function styles() {
  return src('src/scss/style.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(concat('style.min.css'))
    .pipe(dest('dist/css'))
		.pipe(browserSync.stream())
}

function watching() {
  watch(['src/scss/**/*.scss'], styles)
  watch('src/index.html').on('change', browserSync.reload)
}

function browsersync() {
	browserSync.init({
		server: {
			baseDir: 'dist'
		}
	})
}

exports.styles = styles
exports.watching = watching
exports.browsersync = browsersync

exports.default = parallel(browsersync, watching)
