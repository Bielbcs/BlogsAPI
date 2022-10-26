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

module.exports = { validateLogin };