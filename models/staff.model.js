const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StaffSchema = new Schema({
    //name: {type: String, required: true, max: 100},
    //price: {type: Number, required: true},

    id: {type: String, required: true, max: 100},
    name: {type: String, required: true, max: 100},
    title: {type: String, required: true, max: 100},
    local: {type: String, required: true, max: 100},
    className: {type: String, required: true, max: 100},
    children: {type: String, required: true, max: 1000000}
});

// Export the model
module.exports = mongoose.model('Teste', StaffSchema);