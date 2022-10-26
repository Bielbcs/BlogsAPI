const useService = require('../service/userService');

const signUp = async (req, res) => {
  const { email } = req.body;
  const { Authorization } = req.headers;

  const user = await useService.findUser(email);

  if (user) return res.status(409).send({ message: 'User already registered' });

  await useService.signUp(req.body);

  res.status(201).json({ token: Authorization });
};

module.exports = { signUp };
