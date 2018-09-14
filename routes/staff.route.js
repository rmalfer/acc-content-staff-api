const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/staff.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);

router.post('/create', product_controller.product_create);
router.post('/add', product_controller.product_add);
router.post('/createdoc', product_controller.product_createdoc);

router.get('/list', product_controller.product_list);
router.get('/listlast', product_controller.product_list_last);
router.get('/list2', product_controller.product_list2);

router.get('/:id', product_controller.product_details);

router.put('/:id/update', product_controller.product_update);

router.delete('/:id/delete', product_controller.product_delete);


module.exports = router;