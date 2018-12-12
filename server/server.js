const express = require('express');
var consign = require('consign');
var app = express();
const swaggerDoc = require('./swaggerDoc');



swaggerDoc(app);

consign()
    .include('api/routes')
    .then('api/controllers')
    .into(app);

module.exports = app;