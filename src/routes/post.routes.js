const express = require('express');
const token = require('../utils/token.js');
const postController = require('../controllers/postController');
const validations = require('../utils/validations');

const router = express.Router();

router.post('/', token.validate, validations.validatePost, 
  validations.checkCategories, postController.addPost);

router.get('/', token.validate, postController.getAll);

router.put('/:id', token.validate, validations.validateAuthUser, 
validations.validatePut, postController.editPost);

router.get('/:id', token.validate, postController.getById);

module.exports = router;