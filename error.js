/**
 * Error module.
 * @module error
 */
var logger = require('./logger.js').getLogger();

function errorConnect(error, request, response, next) {
  logger.error(error);
  response.statusCode = 500;
  response.send();
}

module.exports = errorConnect;
