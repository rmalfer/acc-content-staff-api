const mongoose = require('mongoose')
//module.exports = mongoose.connect('mongodb://user-staff:123mudar@ds115446.mlab.com:15446/heroku_ddr3bv9f',{})

mongoose.connect('mongodb://user-staff:123mudar@ds115446.mlab.com:15446/heroku_ddr3bv9f');

var customerSchema = new mongoose.Schema({
    name: String,
    email: String
}, { collection: 'staff' }
);

module.exports = { Mongoose: mongoose, CustomerSchema: customerSchema }