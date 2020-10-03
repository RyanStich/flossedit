// Require all tasks in gulp/tasks, including subfolders
require('require-dir')('./gulp/tasks', {recurse: true});


const gulp = require('gulp')

gulp.task(('message'), function() {
    return console.log('hi gulp')
})