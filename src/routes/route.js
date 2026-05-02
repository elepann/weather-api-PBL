const express = require('express');
const routes = express.Router();
const { seyHello, weatherSearch } = require('../controller/itemController.js');

routes.get('/weather', weatherSearch);

module.exports = routes;