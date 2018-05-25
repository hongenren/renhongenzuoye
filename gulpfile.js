 var gulp = require('gulp');
 var sass = require('gulp-sass'); 
 
var connect= require('gulp-connect'); 
gulp.task('copy-index',function(){ 
	//gulp.src()找到我们的index.html然后使用.pipe()通道 
	//gulp.dest()发布拷贝 
	return gulp.src('index.html').pipe(gulp.dest('dist'));
 });
 gulp.task('images',function(){ 
     return gulp.src('img/**').pipe(gulp.dest('dist/img'))
 }); 
 gulp.task('data',function(){ 

	return gulp.src(['js/*.js']).pipe(gulp.dest('dist/data'));

 }) 
  gulp.task('data',function(){ 

	return gulp.src(['html/*.html']).pipe(gulp.dest('dist/html'));

 })
   gulp.task('data',function(){ 

	return gulp.src(['css/*.css']).pipe(gulp.dest('dist/css'));

 })

   gulp.task('watch',function(){
	 gulp.watch('index.html',['copy-index']); 	gulp.watch('img/**',['img']); 	gulp.watch(['html/*.html','js/*.js','css/*.css','!json/package.json'],['data']);
   }) 

	gulp.task('sass',function(){
	return gulp.src('sass/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('dist/css'))
 })
gulp.task('sever',function(){ 
	connect.server({root:'dist'});
})
 