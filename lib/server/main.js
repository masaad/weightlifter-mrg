'use strict';

// require('babel-polyfill');

var express = require('express');
var helmet = require('helmet');
var Config = require('../config');

var app = express();

app.use(helmet());

app.listen(Config.Server.portNo, function () {
  console.log('Server is running at http://localhost:' + Config.Server.portNo);
});

module.exports = app;