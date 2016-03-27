/**
 * Created by lenka on 3/6/16.
 */
var express = require('express');
var router = express.Router();
var fs = require("fs");

    var options = {
        root: __dirname + '/testdata/',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
router.get('/test', function (req, res, next) {
    res.sendFile("test.json", options);
});
router.get('/taxi', function (req, res, next) {
    res.sendFile("taxi.json", options);
});

module.exports = router;