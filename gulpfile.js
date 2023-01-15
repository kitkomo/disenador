const { src, dest, watch, parallel } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const concat = require('gulp-concat')
const browserSync = require('browser-sync').create()
const uglify = require('gulp-uglify-es').default
const autoprefixer = require('gulp-autoprefixer')
const imagemin = require('gulp-imagemin')

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

function scripts() {
	return src([
		'src/js/components/menu.js',
		'src/js/components/disabledBtns.js'
	])
	.pipe(concat('main.min.js'))
	.pipe(uglify())
	.pipe(dest('src/js'))
}

function images() {
	return src('src/assets/images/**/*')
	.pipe(imagemin([
		imagemin.gifsicle({interlaced: true}),
		imagemin.mozjpeg({quality: 75, progressive: true}),
		imagemin.optipng({optimizationLevel: 5}),
		imagemin.svgo({
			plugins: [
				{removeViewBox: true},
				{cleanupIDs: false}
			]
		})
	]))
	.pipe(dest('dist/assets/images'))
}

function watching() {
  watch(['src/scss/**/*.scss'], styles)
  watch(['src/js/components/*.js'], scripts)
  watch('src/index.html').on('change', browserSync.reload)
}

function browsersync() {
	browserSync.init({
		server: {
			baseDir: 'src'
		}
	})
}

function build() {
	return src([
		'src/css/style.min.css',
		'src/js/main.min.js',
		'src/index.html',
		'src/assets/fonts/*.*'
	], {base: 'src'})

	.pipe(dest('dist'))
}

exports.styles = styles
exports.scripts = scripts
exports.watching = watching
exports.browsersync = browsersync
exports.images = images
exports.build = parallel(build, images)
exports.default = parallel(browsersync, watching)
