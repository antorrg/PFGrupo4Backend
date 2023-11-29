const {User}= require('../../database')
const generateToken = require('../../utils/generate');

const userLogin = async(email, nickname, given_name, picture, sub, req, res)=>{
    try {
        // Busca el usuario por el email
        const existingUser = await User.findOne({
          where: {
            email: email,
          },
        });
    
        if (existingUser) {
          // El usuario ya existe, envía un mensaje indicando que está autenticado
          const result = { isCreate: false,  user: existingUser };
          console.log(result+' usuario existente')
            // Genera el token
            const token = generateToken(existingUser);
            console.log(token)
    
             // Agrega el token al encabezado de la respuesta
            if (res && res.header) {
              res.headers('authorization', `Bearer ${token}`);
              console.log('Encabezado Authorization establecido:', res.get('authorization'));
            }
           
      
            return result;
        } else {
          // El usuario no existe, créalo
          const [newUser, create] = await User.findOrCreate({
            where: {
              email: email,
            },
            defaults: {
              email,
              nickname,
              given_name,
              picture,
              sub,
            },
          });
    
          const result = { isCreate: create, user: newUser };
          console.log(result+' Usuario nuevo')
          // Genera el token
          const token = generateToken(newUser);
          console.log(token)
    
          // Agrega el token al encabezado de la respuesta
          if (res && res.header) {
            res.header('authorization', `Bearer ${token}`);
         }
         
    
          return result;
        }
      } catch (error) {
        console.error("¡Hubo un error!", error);
        throw error;
      }
}

module.exports= userLogin;