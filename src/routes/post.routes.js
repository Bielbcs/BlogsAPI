const express = require('express');
const token = require('../utils/token.js');
const postController = require('../controllers/postController');
const validations = require('../utils/validations');

const router = express.Router();

router.post('/', token.validate, validations.validatePost, 
  validations.checkCategories, postController.addPost);

module.exports = router;