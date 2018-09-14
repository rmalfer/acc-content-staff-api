const Product = require('../models/staff.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

// controllers/products.js
exports.product_create = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

exports.product_add = function (req, res) {
    let product = new Product(
        {
            id: req.body.id,
            name: req.body.name,
            title: req.body.title,
            local: req.body.local,
            className: req.body.className,
            children: req.body.children
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

exports.product_createdoc = function (req, res) {

    var group = new Group({valor: req.body.valor});

    Product.insertMany(group, { ordered: false },function(err, success){
        console.log(success);
        res.send('Doc Created successfully')
    });
};

exports.product_list = function (req, res) {

    Product.find({}, function(err, products) {
        var productMap = {};
    
        products.forEach(function(product) {
            productMap[product._id] = product;
        });
    
        res.send(productMap);  
      });
};

exports.product_list_last = function (req, res) {

    Product.findOne()
                .sort({"_id": -1})
                .exec(function(err, data) {
                    if (err) {
                        console.log('Error getting data..');
                    } 
                    if (data) {
                        res.json(data);
                    }
                    else {
                        console.log('No data found!');
                    }
                });
};

exports.product_list2 = function (req, res) {
    Product.find({}, function(err, products) {
        res.send(products.reduce(function(productMap, item) {
            productMap[item.id] = item;
            return productMap;
        }, {}));
    });
};

exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};