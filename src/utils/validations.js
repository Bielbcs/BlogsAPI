const joi = require('joi');
const categoryService = require('../service/categoryService');

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

const validatePost = async (req, res, next) => {
  const schema = joi.object({
    title: joi.string().required(),
    content: joi.string().required(),
    categoryIds: joi.array().items(joi.number().required(), joi.number().required())
      .unique((a, b) => a === b),
  });

  try {
    await schema.validateAsync(req.body);
    next();
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
};

const checkCategories = async (req, res, next) => {
  const { categoryIds } = req.body;

  const categories = await categoryService.getAll();

  try {
    categoryIds.forEach((category) => {
      const test = categories.some(({ id }) => category === id);
      if (!test) throw Error;
    });
    next();
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
};

module.exports = { validateLogin, validateSignUp, validatePost, checkCategories };