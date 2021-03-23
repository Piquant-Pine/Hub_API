const express = require('express');
const router = express.Router();
const productController = require('../controllers/products.js');
const QAController = require('../controllers/QA.js');
const reviewsController = require('../controllers/reviews.js');

router.get('/products', productController.getAllProducts)
router.get('/qa/questions', productController.getAllQuestions)

module.exports = router;