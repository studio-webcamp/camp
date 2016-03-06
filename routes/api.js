/**
 * Created by lenka on 3/6/16.
 */
var express = require('express');
var router = express.Router();
var fs = require("fs");

router.get('/test', function (req, res, next) {
    var options = {
        root: __dirname + '/testdata/',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
    res.sendFile("test.json", options);
});

module.exports = router;