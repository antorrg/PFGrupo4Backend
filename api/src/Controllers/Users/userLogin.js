const {User}= require('../../database')
const generateToken = require('../../utils/generate');

const userLogin = async(email,password, nickname, given_name, picture, sub,   req, res)=>{
    try {
        // Busca el usuario por el email
        const existingUser = await User.findOne({
          where: {
            email: email,
          },
        });
    
        if (existingUser) {
          // El usuario ya existe, envía un mensaje indicando que está autenticado
          let result = { isCreate: false,  user: existingUser };
          // console.log(result+' usuario existente')
            // Genera el token
            const token = generateToken(existingUser);
            // console.log("token generado: ", token)
    
             // Agrega el token al encabezado de la respuesta
            if (res) {
              return res.status(201).json({user:newUser, token})
              // res.header('authorization', `Bearer ${token}`);
              // console.log('Encabezado Authorization establecido:', res.get('authorization'));
            }
           result= {...result,token}
      console.log(result)
            return result;
        } else {
          // El usuario no existe, créalo
          const [newUser, create] = await User.findOrCreate({
            where: {
              email: email,
            },
            defaults: {
              email,
              password,
              nickname,
              given_name,
              picture,
              sub,
            },
          });
    
          const result = { isCreate: create, user: newUser };
          // console.log(result+' Usuario nuevo')
          // Genera el token
          const token = generateToken(newUser);
          // console.log(token)
    
          // Agrega el token al encabezado de la respuesta
          if (res) {
            return res.status(201).json({user:newUser, token})
            // res.header('authorization', `Bearer ${token}`);
            // console.log('Encabezado Authorization establecido:', res.get('authorization'));
          }
         
          result= {...result,token}
          console.log(result)
        }
      } catch (error) {
        console.error("¡Hubo un error!", error);
        throw error;
      }
}

module.exports= userLogin;

// const bcrypt = require('bcrypt');
// const { User } = require('../../database');
// const generateToken = require('../../utils/generate');

// const userLogin = async (email, nickname, given_name, picture, sub, password, req, res) => {
//     try {
//         const existingUser = await User.findOne({
//             where: {
//                 email: email,
//             },
//         });

//         if (existingUser) {
//             // El usuario ya existe, verifica la contraseña
//             const passwordMatch = await bcrypt.compare(password, existingUser.password);

//             if (passwordMatch) {
//                 const result = { isCreate: false, user: existingUser };
//                 console.log(result + ' usuario existente');
//                 const token = generateToken(existingUser);
//                 res.header('Authorization', `Bearer ${token}`);
//                 console.log('Encabezado Authorization establecido:', res.get('authorization'));
//                 return result;
//             } else {
//                 throw new Error('Contraseña incorrecta');
//             }
//         } else {
//             // El usuario no existe, créalo
//             const hashedPassword = await bcrypt.hash(password, 10); // 10 es el número de rondas de hash
//             const [newUser, create] = await User.findOrCreate({
//                 where: {
//                     email: email,
//                 },
//                 defaults: {
//                     email,
//                     nickname,
//                     given_name,
//                     picture,
//                     sub,
//                     password: hashedPassword,
//                 },
//             });

//             const result = { isCreate: create, user: newUser };
//             console.log(result + ' Usuario nuevo');
//             const token = generateToken(newUser);
//             res.header('Authorization', `Bearer ${token}`);
//             return result;
//         }
//     } catch (error) {
//         console.error('¡Hubo un error!', error);
//         throw error;
//     }
// };

// module.exports = userLogin;
