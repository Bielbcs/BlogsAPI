const { Category } = require('../models');

const addCategory = async (name) => {
  const category = await Category.create({ name });

  category.id = category.null;

  return category;
};

module.exports = { addCategory };