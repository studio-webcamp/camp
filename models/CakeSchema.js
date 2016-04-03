/**
 * Created by lenka on 4/3/16.
 */
var mongoose = require('mongoose');
var Flavor = require('./FlavorModel');
var CakeSchema = mongoose.Schema({
    name: String,
    flavor: String,
    price: Number
});

//CakeSchema.static('findCakesByFlavor', function (flavor, callback) {
//    return Flavor.find({ flavors: flavor }, callback);
//});

module.exports = CakeSchema;