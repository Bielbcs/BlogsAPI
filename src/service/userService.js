const { User } = require('../models');

const findUser = async (email) => {
  const user = await User.findOne({ where: { email } });

  return user;
};

const signUp = async (body) => {
  await User.create(body);
};

module.exports = { findUser, signUp };