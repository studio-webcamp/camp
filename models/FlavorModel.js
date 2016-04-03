/**
 * Created by lenka on 4/3/16.
 */
var mongoose = require('mongoose');
var FlavorSchema = require('./FlavorSchema');
var FlavorModel = mongoose.model('FlavorModel', FlavorSchema);



var db = require('../db/db');
//var flavor1 = {name:'fruit', flavors:['Lemon','Raspberry']};
//var flavor2 = {name:'flower', flavors:['Rose','Vanilla']};
//var flavor3 = {name:'nut', flavors:['Coconut','Pistachio']};
//var flavor4 = {name:'classic', flavors:['Chocolate','Coffee','Caramel']};
//var flavor5 = {name:'special', flavors:['Cassis','Ret Velvet']};
//var flavors = [flavor1, flavor2, flavor3, flavor4, flavor5];
//
//
//FlavorModel.create(flavors, function(err, _flavors){
//    if (err) return console.error(err);
//    console.log(_flavors);
//});
//var _id = "57011de2320c39059dcb45c1";
//FlavorModel.findById(_id, function (err, _flavor) {
//    if (err) return console.error("Error", err);
//    console.log("found", _flavor);
//    _flavor.findCakesByFlavors(function(_err, _cackes){
//        console.log(_cackes);
//    });
//});
//FlavorModel.findById(_id, function (err, _flavor) {
//    if (err) return console.error(err);
//    console.log("found", _flavor);
//    _flavor.findCakesByFlavors(function(_err, _cackes){
//        console.log(_cackes);
//    })
//});
module.exports = FlavorModel;
