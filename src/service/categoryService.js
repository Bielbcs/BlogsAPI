const { Category } = require('../models');

const addCategory = async (name) => {
  const category = await Category.create({ name });

  category.id = category.null;

  return category;
};

const getAll = async () => {
  const categories = await Category.findAll();

  return categories;
};

module.exports = { addCategory, getAll };