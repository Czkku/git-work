var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');
var session =require('express-session');


var indexRouter = require('./routes/index');
var singleRouter = require('./routes/single');
var galleryRouter = require('./routes/gallery');
var contactRouter = require('./routes/contact');
var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var backstageRouter = require('./routes/backstage');
var addRouter = require('./routes/add');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html',ejs.__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("123"));
app.use(session({
  secret:"123",
  cookie:{maxAge:60000}
}))
app.use(express.static(path.join(__dirname, 'public')));



app.use('/index', indexRouter);
app.use('/single', singleRouter);
app.use('/gallery', galleryRouter);
app.use('/contact',contactRouter);
app.use('/register',registerRouter);
app.use('/login',loginRouter);
app.use('/backstage',backstageRouter);
app.use('/add',addRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err)
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
