const joi = require('joi');

const validateLogin = async (req, res, next) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
  });

  try {
    await schema.validateAsync(req.body);
    next();
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ message: 'Some required fields are missing' });
  }
};

const validateSignUp = async (req, res, next) => {
  const schema = joi.object({
    displayName: joi.string().min(8).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    image: joi.string(),
  });

  try {
    await schema.validateAsync(req.body);
    next();
  } catch (err) {
    const { message } = err;
    res.status(400).json({ message });
  }
};

module.exports = { validateLogin, validateSignUp };