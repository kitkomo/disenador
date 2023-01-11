const { src, dest, watch, parallel } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const concat = require('gulp-concat')
const browserSync = require('browser-sync').create()
const uglify = require('gulp-uglify-es').default()
const autoprefixer = require('gulp-autoprefixer')

function styles() {
  return src([
		'node_modules/normalize.css/normalize.css',
		'src/scss/style.scss'
])
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(concat('style.min.css'))
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 10 version'],
			grid: true
		}))
    .pipe(dest('src/css'))
		.pipe(browserSync.stream())
}

// function scripts() {
// 	return src('src/js/')
// }

function watching() {
  watch(['src/scss/**/*.scss'], styles)
  watch('src/index.html').on('change', browserSync.reload)
}

function browsersync() {
	browserSync.init({
		server: {
			baseDir: 'src'
		}
	})
}

exports.styles = styles
exports.watching = watching
exports.browsersync = browsersync

exports.default = parallel(browsersync, watching)
