const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
const password = "27K062E5y6DBTk20uk9Xu"; // not the actual password :)
//"mongodb+srv://yassinekrn:27K062E5y6DBTk20uk9Xu@cluster0.ofmazu6.mongodb.net/local_lib?retryWrites=true&w=majority"

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = `mongodb+srv://yassinekrn:${password}@cluster0.ofmazu6.mongodb.net/locallib?retryWrites=true&w=majority`;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

// Create a "genre" model just by requiring the module
const genre = require("../models/genre");

// view engine setup
//set the 'views' value to specify the folder where the templates will be stored
app.set('views', path.join(__dirname, 'views'));
//set the 'view engine' value to specify the template library
app.set('view engine', 'jade');

app.use(logger('dev'));

//needed to populate req.body with the form fields
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
//serve all the static files in the /public directory in the project root
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
//if you get to this point, there is something wrong with the request
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
