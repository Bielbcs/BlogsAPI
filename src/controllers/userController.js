const useService = require('../service/userService');

const signUp = async (req, res) => {
  const { email } = req.body;
  const { Authorization } = req.headers;

  const user = await useService.findUser(email);

  if (user) return res.status(409).send({ message: 'User already registered' });

  await useService.signUp(req.body);

  res.status(201).json({ token: Authorization });
};

const getAll = async (req, res) => {
  const users = await useService.getAll();

  res.status(200).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await useService.byId(Number(id));

  if (!user) return res.status(404).send({ message: 'User does not exist' });

  res.status(200).json(user);
};

module.exports = { signUp, getAll, getById };
