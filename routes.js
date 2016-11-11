/**
 * Routes module.
 * @module routes
 */

var express = require('express'),
    router = express.Router()

router.ws('/', function (ws, res) {
    ws.on('message', function(msg) {
        console.log(msg);
    });
});

module.exports = router;
