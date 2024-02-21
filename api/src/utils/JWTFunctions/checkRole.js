
const checkRole = (allowedRoles) => {
    return (req, res, next) => {
      const {userRole}= req.userInfo;
      //const userRole = req.user.role; // asumiendo que el rol está en req.user después de la autenticación
  
      if (allowedRoles.includes(userRole)) {
        // El usuario tiene el rol necesario, permitir el acceso
        next();
      } else {
        // El usuario no tiene el rol necesario, rechazar la solicitud
        res.status(403).json({ error: 'Unauthorized access' });
      }
    };
  };

  export default checkRole;
//Este es un modelo de como recibe el parámetro:
  //todo   app.get('/ruta-protegida', checkRole(['admin']), (req, res) => {