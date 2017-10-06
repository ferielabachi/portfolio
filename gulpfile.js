"use strict";


// dependencies

var gulp       = require('gulp');
var sass       = require('gulp-sass');
var campass		= require('gulp-compass');
var minifyCSS  = require('gulp-clean-css');
var uglify     = require('gulp-uglify');
var rename     = require('gulp-rename');
var changed     = require('gulp-changed');
var imagemin = require('gulp-imagemin');


////////////////
/// - SCSS/CSS
///////////////

var SCSS_SRC =   './src/assets/scss/**/*.scss';
var SCSS_DEST =  './src/assets/css';

////////////////
/// - IMAGES
///////////////

var IMG_SRC = './src/assets/images/**/*.+(png|jpg|gif|svg)';
var IMG_DEST = './src/assets/images';

///////////////////////
/// - SCSS compilation
/////////////////////// 

 gulp.task('compile_scss', function() {
	gulp.src(SCSS_SRC)
	    .pipe(sass().on('error', sass.logError))
	    .pipe(minifyCSS())
	    .pipe(rename({ suffix: '.min' }))
	    .pipe(changed(SCSS_DEST))
	    .pipe(gulp.dest(SCSS_DEST));
     });

///////////////////////
///// - IMAGE MIN
/////////////////////// 

	gulp.task('images', function(){
	   gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
	  .pipe(imagemin())
	  .pipe(gulp.dest('dist/images'))
	});

///////////////////////////
// detected changes in SCSS
///////////////////////////

 gulp.task('watch_scss', function(){

	 gulp.watch(SCSS_SRC, ['compile_scss']);
     });

/// run tasks

gulp.task('default', ['watch_scss']);
