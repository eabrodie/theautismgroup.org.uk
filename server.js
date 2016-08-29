'use strict';
var fs = require('fs');

var express = require('express');

var app = express();

app.get('/', function (req, res, next) {
  res.render('index.pug');
});

function page(name) {
  return (req, res, next) => {
    res.render('page.pug', JSON.parse(fs.readFileSync(__dirname + '/content/page/' + name, 'utf8')));
  };
}

app.get('/about', page('about'));

app.get('/contact', page('contact'));

app.get('/groups', page('groups'));

app.get('/training', function (req, res, next) {
  res.render('training.pug');
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
