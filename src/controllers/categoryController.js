const categoryService = require('../service/categoryService');

const addCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(400).send({ message: '"name" is required' });

  const addedCategory = await categoryService.addCategory(name);

  return res.status(201).json(addedCategory);
};

module.exports = { addCategory };