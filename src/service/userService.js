const { User } = require('../models');

const findUser = async (email) => {
  const user = await User.findOne({ where: { email } });

  return user;
};

const signUp = async (body) => {
  await User.create(body);
};

const getAll = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });

  return users;
};

const byId = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });

  return user;
};

module.exports = { findUser, signUp, getAll, byId };