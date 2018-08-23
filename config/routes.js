const express = require('express');
const itemQuerys = require('../api/itens/itemQuerys');



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
  router.get('/customers', function (req, res, next) {
    var db = require('../config/database');
    var Customer = db.Mongoose.model('staff', db.CustomerSchema, 'staff');
    Customer.find({}).lean().exec(function(e,docs){
      res.json(docs);
      res.end();
    });
  });

}

  // require('../api/itens/itemRoutes')(router, itemQuerys);
