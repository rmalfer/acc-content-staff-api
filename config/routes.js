const express = require('express');
const itemQuerys = require('../api/itens/itemQuerys');

const db = require('../config/database');

var bodyParser = require('body-parser');

module.exports = function(server) {

  //API Routes
  const router = express.Router();
  server.use('/api', router);

  //Registering API methods in router
  const itemService = require('../api/itens/itemService');
  itemService.register(router, '/item');

  //Search's routes
  router.get('/search-name/:name', itemQuerys.searchByName);
  const bagService = require('../api/bag/bagService');
  bagService.register(router, '/bag');

  /* GET all customers. */
  router.get('/staff', function (req, res, next) {

    //var db = require('../config/database');

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
   
    var Customer = db.Mongoose.model('staff', db.CustomerSchema, 'staff');
    Customer.find({}).lean().exec(function(e,docs){
      res.json(docs);
      res.end();
    });
  });

  router.post('/staff', function(req, res) {

    const util = require('util');
    //console.log(util.inspect(req.body, false, null))
    var inputData = JSON.stringify(req.body);

    //console.log("\n\ntst = " + inputData);

    // Insert JSON straight into MongoDB
    var Customer = db.Mongoose.model('staff', db.CustomerSchema, 'staff');
        // Customer.insertMany(res.body, function (err, res) {
        //     if (err)
        //       res.send('Error');
        //     else
        //       res.send('Success');
        //       console.log("1 document inserted");
        // });

        res.send('Success');
    
  });

}
// require('../api/itens/itemRoutes')(router, itemQuerys);