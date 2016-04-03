/**
 * Created by lenka on 4/3/16.
 */
var mongoose = require('mongoose');
var Cake = require('./CakeModel');
var FlavorSchema = mongoose.Schema({
    name: String,
    flavors: Array
});

FlavorSchema.methods.findCakesByFlavors = function(callback){
    return Cake.find({flavor:{$in:this.flavors}}, callback);
};

module.exports = FlavorSchema;