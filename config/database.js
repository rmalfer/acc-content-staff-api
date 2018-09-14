const url = "mongodb://user-staff:123mudar@ds115446.mlab.com:15446/heroku_ddr3bv9f"; 
const mongoose = require('mongoose')
mongoose.connect(url);
var Schema = mongoose.Schema;

var customerSchema = new mongoose.Schema({
    id: String,
    name: String,
    title: String,
    local: String,
    className: String,
    children: String
}, { collection: 'staff' }
);

var Staff = mongoose.model('UserData', customerSchema);  



var MongoClient = require('mongodb').MongoClient;

// make client connect to mongo service
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    // db pointing to newdb
    console.log("Switched to "+db.databaseName+" database");
 
    // // documents to be inserted
    // var docs = [{ name: "Udat", age: "21" },
    //             { name: "Karthik", age: "24" },
    //             { name: "Anil", age: "23" }];
    
    // // insert multiple documents to 'users' collection using insertOne
    // db.collection("users").insertMany(docs, function(err, res) {
    //     if (err) throw err;
    //     console.log(res.insertedCount+" documents inserted");
    //     // close the connection to db when you are done with it
    //     db.close();
    // });
});



module.exports = { Mongoose: mongoose, CustomerSchema: customerSchema }