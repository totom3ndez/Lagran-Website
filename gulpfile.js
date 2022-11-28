const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const webp = require('gulp-webp');
const cleanCss = require('gulp-clean-css');

// Compile SASS to CSS
function css(done) {
	src('styles/sass/**/*.scss') // Get SASS file
		.pipe(plumber()) // Checks errors buy doesnt stop Gulp
		.pipe(sass()) // Compile
		.pipe(cleanCss()) // Compress CSS
		.pipe(dest('build/css')); // Save file as CSS
	done();
}

// Convert IMG to WEBP

function convertWebp(done) {
	src('../imagenes_web/**/*.{png,jpg}').pipe(webp()).pipe(dest('resources/webp'));
	done();
}

// Watch for changes
function listen(done) {
	watch('styles/sass/**/*', css);
	done();
}

exports.css = css;
exports.listen = listen;
exports.convertWebp = convertWebp;
exports.dev = parallel(convertWebp, listen);
