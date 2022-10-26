const express = require('express');
const userController = require('../controllers/userController.js');
const validations = require('../utils/validations');
const token = require('../utils/token');

const router = express.Router();

router.post('/', validations.validateSignUp, token.generate, userController.signUp);
router.get('/', token.validate, userController.getAll);

module.exports = router;