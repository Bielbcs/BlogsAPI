const express = require('express');
const token = require('../utils/token.js');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

router.post('/', token.validate, categoryController.addCategory);

module.exports = router;