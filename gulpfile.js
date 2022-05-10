const {src, dest, watch, parallel, series} = require('gulp');

const scss 						= require('gulp-sass')(require('sass'));
const concat 					= require('gulp-concat');
const browserSync 		= require('browser-sync').create();
const uglify 		 			= require('gulp-uglify-es').default;
const autoprefixer 		= require('gulp-autoprefixer');
const imagemin 				= require('gulp-imagemin');
const del 						= require('del');
const pug 						= require('gulp-pug');
const imagewebp				= require('gulp-webp');

function browsersync (){
	browserSync.init({
		server: {
			baseDir: 'app/'
		}
	});
};

function cleanImages() {
	return del('app/images');
}

function webpImage () {
	return src ('app/img/**/*.{png,jpg,jpeg}')
	.pipe(imagewebp())
	.pipe(dest('app/images'));
}

function addSvg() {
	return src ('app/img/**/*.svg')
	.pipe(dest('app/images'))
}

function cleanDist(){
	return del('dist')
}

function images(){
	return src('app/images/**/*')
	.pipe(dest('dist/images'))
}

// function images(){
//  return src('app/images/**/*{jpg,png}')
// 	.pipe(imagemin([
// 		imagemin.gifsicle({interlaced: true}),
// 		imagemin.mozjpeg({quality: 10, progressive: true}),
// 		imagemin.optipng({optimizationLevel: 10}),
// 		imagemin.svgo({
// 			plugins: [
// 				{removeViewBox: true},
// 				{cleanupIDs: false}
// 			]
// 		})
// 	]))
// 	.pipe(dest('dist/images'))
// }

function scripts(){
	return src([
		// 'node_modules/jquery/dist/jquery.js',					// uncoment only for use jQuery (after install in package.json)
		// 'node_modules/bootstrap/dist/js/bootstrap.js', // uncomment only use Bootstrap (after install in package.json)
		'app/js/main.js'
	])
	.pipe(concat('main.min.js'))
	.pipe(uglify())
	.pipe(dest('app/js'))
	.pipe(browserSync.stream())
};



function pugToHTML () {
  return src('./app/*.pug')
    .pipe(
      pug({
        doctype: 'html',
        pretty: true
      })
    )
    .pipe(dest('./app'));
};

function styles() {
		return src([
			'app/scss/**/*.scss',
			// 'node_modules/bootstrap/dist/css/bootstrap.css', // uncomment only use bootstrap
		])
				.pipe(scss({outputStyle: 'expanded'})) // Options: nested, expanded, compact, compressed
				.pipe(concat('style.css'))
				.pipe(autoprefixer({
					overrideBrowserslist: ['last 15 version'],
					grid: true,
				}))
				.pipe(dest('app/css'))
				.pipe(browserSync.stream())
};

function build(){
	return src([
		'app/css/style.css',
		'app/fonts/**/*',
		'app/js/main.js',
		'app/*.html',
	], {base: 'app'})
	.pipe(dest('dist'))
}

function watching () {
		watch(['app/scss/**/*.scss'], styles);
		watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
		watch(['app/*.html']).on('change', browserSync.reload);
		watch(['app/**/*.pug']).on('change', browserSync.reload);
		watch(['app/**/*.pug'], pugToHTML);
		watch(['app/images/']).on('change', browserSync.reload);
};

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.pugToHTML = pugToHTML;
exports.default = series(cleanImages, webpImage, addSvg, parallel(styles, scripts, browsersync, watching, pugToHTML));
exports.build = series(cleanDist, images, build);
exports.images = images;
exports.cleandist = cleanDist;
exports.webpImage = webpImage;
exports.cleanImages = cleanImages;
exports.addSvg = addSvg;