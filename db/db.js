/**
 * Created by lenka on 4/3/16.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/inventory');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log("we're connected!");
});

module.exports = db;