'use strict';
var fs = require('fs');

var express = require('express');

var app = express();

app.get('/', function (req, res, next) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/about', function (req, res, next) {
  res.sendFile(__dirname + '/about.html');
});

app.get('/contact', function (req, res, next) {
  res.sendFile(__dirname + '/contact.html');
});

app.get('/style.css', function (req, res, next) {
  res.type('css');
  res.send(
    fs.readFileSync(__dirname + '/style/style.css', 'utf8')
  );
});

app.get('/logo-white-teal.svg', function (req, res, next) {
  res.sendFile(__dirname + '/images/logo-white-teal.svg');
});

app.get('/logo-white.svg', function (req, res, next) {
  res.sendFile(__dirname + '/images/logo-white.svg');
});

app.get('/main-image.jpg', function (req, res, next) {
  res.sendFile(__dirname + '/images/main-image.jpg');
});

module.exports = app.listen(3000);
