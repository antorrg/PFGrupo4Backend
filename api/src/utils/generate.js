const { sign } = require('jsonwebtoken');
require ('dotenv').config();
const {SECRET_KEY} = process.env;

const generateToken = (user) => {
  const secretKey = SECRET_KEY;
  const token = sign({ userId: user.id, email: user.email }, secretKey, { expiresIn: '1h' });
  return token;
};

module.exports = generateToken;
