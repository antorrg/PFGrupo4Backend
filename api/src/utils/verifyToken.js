const { verify } = require('jsonwebtoken');
require('dotenv').config();
const { SECRET_KEY } = process.env;

const verifyToken = (req, res, next) => {
  // Obtén el token del encabezado de la solicitud
  const token = req.headers['x-access-token'] || req.headers.Authorization;

  // Verifica si el token está presente
  if (!token) {
    return res.status(401).json({ error: 'Acceso no autorizado. Token no proporcionado.' });
  }

  // Verifica el token
  verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token inválido.' });
    }

    // Almacena el usuario decodificado en el objeto de solicitud para su uso posterior
    req.user = decoded;
    next();
  });
};

module.exports =  verifyToken ;

