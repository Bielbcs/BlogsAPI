const express = require('express');
const loginController = require('../controllers/loginController.js');
const validations = require('../utils/validations');
const token = require('../utils/token.js');

const router = express.Router();

router.post('/', validations.validateLogin, token.generate, loginController.login);

module.exports = router;