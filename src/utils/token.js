const jwt = require('jsonwebtoken');
require('dotenv');

const generate = (req, res, next) => {
  const { password, ...rest } = req.body;
  
  const token = jwt.sign(rest, process.env.JWT_SECRET);

  req.headers.Authorization = token;

  return next();
};  

module.exports = { generate };