var gulp            = require('gulp');
var slug            = require('slug');
var del             = require('del');
var hogan           = require('hogan.js');
var fs              = require('fs');
var path            = require('path');
var through         = require('through2');
var merge           = require('merge-stream');
var moment          = require('moment');
var spawn           = require('child_process').spawn;
var gulpLoadPlugins = require('gulp-load-plugins');

var config = require('./config.json');

// plugins
var $ = gulpLoadPlugins({
  rename: {
    'gulp-front-matter': 'frontMatter'
  }
});

// Directories
var POST_DIR = '_posts';
var DRAFT_DIR = '_drafts';
var LAYOUT_DIR = '_layouts';
var SITE_DIR = 'site';
var ASSET_DIR = 'assets';

function collectPosts() {
 var posts = [];
  return through.obj(function (file, enc, cb) {
    posts.push(file);
    this.push(file);
    cb();
  });
}

function applyTemplate(templateFile) {
  var template = hogan.compile(fs.readFileSync(path.join(__dirname, templateFile)).toString());
  var head = hogan.compile(fs.readFileSync(path.join(__dirname, '_layouts/partials/head.hogan')).toString());
  var header = hogan.compile(fs.readFileSync(path.join(__dirname, '_layouts/partials/header.hogan')).toString());
  var footer = hogan.compile(fs.readFileSync(path.join(__dirname, '_layouts/partials/footer.hogan')).toString());
  return through.obj(function (file, enc, cb) {
    var content = hogan.compile(file.contents.toString());
    var data = {
      year: new Date().getFullYear(),
      author: config.author,
      title: file.frontMatter.title,
      url: config.url,
      description: file.frontMatter.summary,
      twitter: config.twitter,
      postTitle: file.frontMatter.title,
      publishedAt: file.frontMatter.date,
    }
    file.contents = new Buffer(template.render(data, {head: head, header: header, content: content, footer: footer}),'utf8');
    this.push(file);
    cb();
  });
}
gulp.task('index', function(){
  var files = [];
  var posts = [];
  gulp.src(`${POST_DIR}/*.md`)
    .pipe($.debug({title: 'getting posts'}))
    .pipe($.rename({extname: ''}))
    .pipe($.frontMatter())
    .pipe($.tap(function(file){
      files.push({name: file.relative, date: file.frontMatter.date});
    }))
    .on('end', function() {
      files.forEach(function(file){
        posts.push({
          postTitle: file.name.charAt(0).toUpperCase() + file.name.slice(1),
          slug: slug(file.name),
          publishedAt: file.date
        });
      });
    });

  setTimeout(function(){
    return gulp.src(`${LAYOUT_DIR}/index.hogan`, {}, '.html')
      .pipe($.hogan({year: `${new Date().getFullYear()}`, twitter: config.twitter, posts: posts}, null, '.html'))
      .pipe(gulp.dest(`${SITE_DIR}`));
  }, 2000);
});

gulp.task('posts', function() {
  return gulp.src(`${POST_DIR}/*.md`)
    .pipe($.frontMatter({remove: true}))
    .pipe($.marked())
    .pipe(applyTemplate(`${LAYOUT_DIR}/post.hogan`))
    .pipe($.dest(`${SITE_DIR}/:name/index.html`))
    .pipe(gulp.dest(`${SITE_DIR}`));
});

gulp.task('img', function(){
  return gulp.src(`${ASSET_DIR}/img/*`)
    .pipe($.imagemin())
    .pipe(gulp.dest(`${SITE_DIR}/img`));
});

gulp.task('css', function(){
  return gulp.src(`${ASSET_DIR}/css/*.css`)
    .pipe($.cssmin())
    .pipe(gulp.dest(`${SITE_DIR}/css`));
});

gulp.task('js', function(){
  return gulp.src(`${ASSET_DIR}/js/*.js`)
    .pipe($.uglify())
    .pipe(gulp.dest(`${SITE_DIR}/js`));
});

gulp.task('assets', function(callback) {
  $.sequence(['img', 'js', 'css'])(callback);
});

gulp.task('clean', function() {
  return del.sync(`${SITE_DIR}`);
});

gulp.task('serve', function() {
  spawn('list', [`${SITE_DIR}`], {stdio: 'inherit'});
});

gulp.task('watch', function(){
  gulp.watch([`${POST_DIR}/*.md`, `${LAYOUT_DIR}/*.hogan`], ['index', 'posts']);
  gulp.watch(`${ASSET_DIR}/**/*`, ['assets']);
});

gulp.task('build', $.sequence('assets', ['index', 'posts']));

gulp.task('start', function(){
  spawn('serve', [`${SITE_DIR}`, '-c'], {stdio: 'inherit'});
});

gulp.task('default', function(callback) {
  $.sequence(['index', 'posts', 'assets'], ['serve','watch'])(callback);
});

