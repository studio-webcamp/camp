/**
 * Created by lenka on 3/6/16.
 */
var express = require('express');
var router = express.Router();
var fs = require("fs");
var db = require('../db/db');

var Cake = require('../models/CakeModel');
var Flavor = require('../models/FlavorModel');

router.get('/flavors', function(req, res, next){
    Flavor.find(function (err, _flavors) {
        if (err) return res.status(500).json({ error: 'message' });
        res.json(_flavors);
    });
});
router.get('/flavors/:id', function(req, res, next){
    var _id = req.params.id;
    Flavor.findById(_id, function (err, _flavor) {
        if (err) return res.status(500).json({ error: 'message' });
        res.json(_flavor);
    });
});
router.get('/cakes', function(req, res, next){
    Cake.find(function (err, _cakes) {
        if (err) return res.status(500).json({ error: 'message' });
        res.json(_cakes);
    });
});
router.get('/cakes/:id', function(req, res, next){
    var _id = req.params.id;
    Cake.findById(_id, function (err, _cake) {
        if (err) return res.status(500).json({ error: 'message' });
        res.json(_cake);
    });
});


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