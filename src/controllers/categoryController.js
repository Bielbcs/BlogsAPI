const categoryService = require('../service/categoryService');

const addCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(400).send({ message: '"name" is required' });

  const addedCategory = await categoryService.addCategory(name);

  return res.status(201).json(addedCategory);
};

const getAll = async (req, res) => {
  const categories = await categoryService.getAll();

  res.status(200).json(categories);
};

module.exports = { addCategory, getAll };