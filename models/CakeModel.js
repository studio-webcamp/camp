/**
 * Created by lenka on 4/3/16.
 */
var mongoose = require('mongoose');
var CakeSchema = require('./CakeSchema');
var CakeModel = mongoose.model('CakeModel', CakeSchema);

//var db = require('../db/db');
//var cake1 = { name: 'macaroon', flavor:'Cassis', price:30 };
//var cake2 = { name: 'macaroon', flavor:'Chocolate', price:24 };
//var cake3 = { name: 'macaroon', flavor:'Coconut', price:21 };
//var cake4 = { name: 'macaroon', flavor:'Coffee', price:22 };
//var cake5 = { name: 'macaroon', flavor:'Lemon', price:20 };
//var cake6 = { name: 'macaroon', flavor:'Pistachio', price:25 };
//var cake7 = { name: 'macaroon', flavor:'Raspberry', price:20 };
//var cake8 = { name: 'macaroon', flavor:'Ret Velvet', price:23 };
//var cake9 = { name: 'macaroon', flavor:'Rose', price:18 };
//var cake10 = { name: 'macaroon', flavor:'Caramel', price:19 };
//var cake11 = { name: 'macaroon', flavor:'Vanilla', price:15 };
//var cakes = [cake1, cake2, cake3, cake4, cake5, cake6, cake7, cake8, cake9, cake10, cake11];

//CakeModel.create(cakes, function(err, _cakes){
//    if (err) return console.error(err);
//    console.log(_cakes);
//});
//cake1.save(function (err, cake1) {
//    if (err) return console.error(err);
//    console.log(cake1);
//});

module.exports = CakeModel;
