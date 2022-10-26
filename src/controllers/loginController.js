const useService = require('../service/userService');

const login = async (req, res) => {
  const { email } = req.body;
  const { Authorization } = req.headers;

  const user = await useService.findUser(email);

  if (!user) return res.status(400).send({ message: 'Invalid fields' });

  res.status(200).send({ token: Authorization });
};

module.exports = { login };