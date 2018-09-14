const Staff = require('./staff');

//Create REST API, adds CRUD to Mongog's schema
Staff.methods(['get', 'post', 'put', 'delete']);

//Return post/put methods updated
Staff.updateOptions({new: true, runValidators: true});

module.exports = Staff
