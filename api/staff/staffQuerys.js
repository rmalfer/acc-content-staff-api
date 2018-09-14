const Staff = require('./staff');

const searchByName = (req, res, next) => {
    const urlParameter = req.params.name;
    // Find the objet by name
    Staff.find({'name' : urlParameter}, (err, staff) => {
        if (err) {
            return handleError(err);
        } else {
            res.json(staff);
        }
    });
};

module.exports = { searchByName }