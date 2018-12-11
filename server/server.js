const express = require('express');
var consign = require('consign');
var app = express();

consign()
    .include('api/routes')
    .then('api/controllers')
    .into(app);

module.exports = app;