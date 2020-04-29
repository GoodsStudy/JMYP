var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/backstageRouter/backstage-user');
var loginRouter = require('./routes/backstageRouter/backstage-login');
var uploadRouter = require('./routes/backstageRouter/upload/backstage-upload')

/******************************************************app商城接口****************************************************************************/
let appRegsRouter = require('./routes/appRouter/app-login/login-reg')
let appLogin = require('./routes/appRouter/app-login/login-log')
let appSelect = require('./routes/appRouter/app-goods/goods-select')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/upload',uploadRouter)

/******************************************************app商城接口****************************************************************************/
app.use('/appRegs',appRegsRouter)
app.use('/appLogin',appLogin)
app.use('/appSelect',appSelect)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
