const express = require('express');
const app = express();
const routes = require('./src/routes/route');

//middleware
app.use(express.json());
app.use('/api/v1', routes);

module.exports = app;