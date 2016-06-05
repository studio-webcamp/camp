/**
 * Created by lenka on 4/3/16.
 */
var mongoose = require('mongoose');
var FlavorSchema = mongoose.Schema({
    name: String,
    flavors: Array,
    cakes: Array
});

FlavorSchema.methods.findCakesByFlavors = function(callback){
    var CakeModel =  require('./CakeModel');
    return CakeModel.find({flavor:{$in:this.flavors}}, callback);
};

module.exports = FlavorSchema;