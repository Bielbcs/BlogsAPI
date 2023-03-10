const jwt = require('jsonwebtoken');
require('dotenv');

const generate = (req, res, next) => {
  const { password, ...rest } = req.body;
  
  const token = jwt.sign(rest, process.env.JWT_SECRET);

  req.headers.Authorization = token;

  return next();
};

const validate = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).send({ message: 'Token not found' });

  try {
    const decoded = jwt.verify(authorization, process.env.JWT_SECRET);

    req.headers.decoded = decoded;
  } catch (e) {
    console.log(e.message);
    return res.status(401).send({ message: 'Expired or invalid token' });    
  }

  return next();
};

module.exports = { generate, validate };