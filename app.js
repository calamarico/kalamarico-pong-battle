/**
 * Main App.
 * @module app
 */

global.config = require('./config.json');

var express = require('express'),
    app = express(),
    expressWs = require('express-ws')(app),
    routes = require('./routes.js'),
    logger = require('./logger.js'),
    errorConnect = require('./error.js'),
    config = global.config,
    bodyParser = require('body-parser');

app.use(logger.connectLogger());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false 
}));
app.use(routes);
app.use(errorConnect);

app.listen(config.port, function () {
    console.info('Pong battle is listening on port: ' + config.port);
});
