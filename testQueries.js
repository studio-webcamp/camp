/**
 * Created by lenka on 4/2/16.
 */
var assert = require('assert');
var testQueries = {};
function privateF() {
    console.log('provateF');
}
function onCompleted(db) {
    db.close();
}
testQueries.insertDocument = function (db) {
    db.collection('cafes').insertOne({
        "address": {
            "street": "2 Draizera",
            "zipcode": "04105",
            "building": "28",
            "coord": [-53.9557413, 50.7720266]
        },
        "borough": "Troeschina",
        "cuisine": "Bistro",
        "name": "Bistro",
        "drive": true,
        "cafe_id": "51704623"
    }, function (err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the restaurants collection.");
        onCompleted(db);
    });
};

testQueries.findRestaurants = function (query, db, sortQ) {
    var _query = query || {};
    var cursor = db.collection('restaurants').find(_query);
    if (sortQ) {
        cursor.sort(sortQ);
    }
    cursor.each(function (err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            console.dir(doc);
        } else {
            onCompleted(db);
        }
    });
};
testQueries.updateRestaurants = function (db) {
    db.collection('restaurants').updateOne(
        {"name": "Gopak"},
        {
            $set: {"cuisine": "American (New)"},
            $currentDate: {"lastModified": true}
        }, function (err, results) {
            assert.equal(err, null);
            console.log("updated Restaurants", results.matchedCount, results.modifiedCount);
            onCompleted(db);
        });
};
testQueries.removeRestaurants = function (db) {
    db.collection('restaurants').deleteOne(
        {"name": "Gopak"},
        function (err, results) {
            assert.equal(err, null);
            console.log("deleted", results);
            onCompleted(db);
        }
    );
};
testQueries.aggregateRestaurants = function (db) {
    db.collection('restaurants').aggregate(
        [
            {$group: {_id: 'rsts', count: {$sum: 1}}}
        ]).toArray(function (err, result) {
            assert.equal(err, null);
            console.log(result);
            onCompleted(db);
        });
};

testQueries.joinCollections = function (db) {
    db.collection('restaurants').aggregate(
        [
            {
                $lookup:
                {
                    from: "cafes",
                    localField: "borough",
                    foreignField: "borough",
                    as: "inventory_docs"
                }
            }
        ]
    ).toArray(function (err, result) {
            assert.equal(err, null);
            console.log(result);
            onCompleted(db);
        });
};
module.exports = testQueries;