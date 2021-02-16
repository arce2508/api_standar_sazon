const express = require ('express')

const controller = require ('../../src/controllers/product-controllers')
const router = express.Router ()

router.post ('/product', controller.createProduct);
router.get ('/product', controller.searchProduct);

module.exports = router;
