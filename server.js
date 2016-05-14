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

app.get('/groups', function (req, res, next) {
  res.sendFile(__dirname + '/groups.html');
});

app.get('/training', function (req, res, next) {
  res.sendFile(__dirname + '/training.html');
});

app.get('/style.css', function (req, res, next) {
  res.type('css');
  res.send(
    fs.readFileSync(__dirname + '/style/normalize.css', 'utf8') +
    fs.readFileSync(__dirname + '/style/style2.css', 'utf8')
  );
});

app.get('/logo-white-teal.svg', function (req, res, next) {
  res.sendFile(__dirname + '/images/logo-white-teal.svg');
});

app.get('/logo-white.svg', function (req, res, next) {
  res.sendFile(__dirname + '/images/logo-white.svg');
});

app.get('/main-image.jpg', function (req, res, next) {
  res.sendFile(__dirname + '/images/main-image-small.jpg');
});

app.get('/flyer.pdf', function (req, res, next) {
  res.sendFile(__dirname + '/Pok-magic.pdf');
});

module.exports = app.listen(3000);
