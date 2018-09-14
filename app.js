//app.js
const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/staff.route'); // Imports routes for the products
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
//let dev_db_url = 'mongodb://user-staff:123mudar@ds115446.mlab.com:15446/heroku_ddr3bv9f';
let dev_db_url = 'mongodb://localhost:27017/staff';
let mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/staff', product);

let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});