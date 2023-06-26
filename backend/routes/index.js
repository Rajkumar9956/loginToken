const express = require('express');
const router = express.Router();
const Product = require('../Controllers/ProductController')
const auth = require('../Controllers/AdminController');
const { IsAuth } = require('../middleware/auth');

router.post('/add-product', IsAuth, Product.AddProduct);
router.get('/get-product',Product.getProduct);
router.post('/update-product',Product.updateProduct);
router.post('/delete-product',Product.deleteData)


router.post('/admin',auth.authUser)


module.exports= router;