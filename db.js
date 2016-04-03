/**
 * Created by lenka on 4/2/16.
 */
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var assert = require('assert');
var testQueries  = require('./testQueries');
var url = 'mongodb://localhost:27017/test';

var q1 = { "grades.score": { $gt: 15 } };
var q2 = { "cuisine": "Greece", "address.zipcode": "04105" };
var sQ = { "borough": -1, "grades.score": -1 };
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server.");
    //testQueries.insertDocument(db);
    //testQueries.findRestaurants(null, db, sQ);
    //testQueries.updateRestaurants(db);
    //testQueries.removeRestaurants(db);
    //testQueries.aggregateRestaurants(db);
    //testQueries.joinCollections(db);
});