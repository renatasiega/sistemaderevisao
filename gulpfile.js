var gulp = require('gulp');
var server = require('gulp-express');

gulp.task('server', function () {
	server.run(['server.js']);
});//End task server

gulp.task('default', ['server']);
