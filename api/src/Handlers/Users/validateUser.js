const {User} = require('../../database');
const { userLogin, userwithPass, userUpdPass, userUpdSub}= require('../../Controllers/Users/userLogin')

const validateUser = async (req, res) => {
  const { email, password, nickname, given_name, picture, sub } = req.body;
  try {
    const userFound = await User.findOne({
      attributes: ['sub', 'password'],
      where: {
        email: email,
      },
    });

    if (!userFound) {
      if (sub !== null && password === null) {
        const send = await userLogin(email, password, nickname, given_name, picture, sub);
        return res.status(201).json(send);

      } else if (sub === null && password !== null) {
        const send2 = await userwithPass(email, password, nickname, given_name, picture, sub);
        return res.status(201).json(send2);

      } else {
        return res.status(400).json({ error: 'Invalid request parameters create' });
      }
    } if (userFound){
      if (sub !== null && password === null) {
        if (userFound.sub && !userFound.password) {
          const send1 = await userLogin(email, password, nickname, given_name, picture, sub);
          return res.status(201).json(send1);

        } else if (userFound.sub && userFound.password){
          const send1 = await userLogin(email, password, nickname, given_name, picture, sub);
          return res.status(201).json(send1);
        }
          else if(!userFound.sub && userFound.password){
            const result = await userUpdSub(email, password, nickname, given_name, picture, sub, req, res)
            return res.status(201).json(result);
          
        }else {
          return res.status(400).json({ error: 'Invalid request parameters login' });
        }

      }if (sub === null && password !== null) {
        if (userFound.sub && !userFound.password){
          const send3 = await userUpdPass(email, password, nickname, given_name, picture, sub, req, res);
          return res.status(201).json(send3);

        } else if(!userFound.sub && userFound.password){
          const result = await userwithPass(email, password, nickname, given_name, picture, sub, req, res);
          console.log('soy usuario solo con pass ' + result);
          return res.status(201).json(result);

        }else if (userFound.sub && userFound.password){
          const result = await userwithPass(email, password, nickname, given_name, picture, sub, req, res);
          console.log('soy usuario solo con pass ' + result);
          return res.status(201).json(result);
        }
      } else {
        return res.status(400).json({ error: 'Invalid request parameters password' });
      }
    }
  } catch (error) {
    console.error("¡Hubo un error (en la funcion validate)!", error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = validateUser;


// const { User } = require('../../database');
// const { userLogin, userwithPass, userUpdPass, userUpdSub } = require('../../Controllers/Users/userLogin');

// const validateUser = async (req, res) => {
//   const { email, password, nickname, given_name, picture, sub } = req.body;

//   try {
//     const userFound = await User.findOne({
//       attributes: ['sub', 'password'],
//       where: {
//         email: email,
//       },
//     });

//     if (!userFound) {
//       return handleInvalidRequest(res, 'Invalid request parameters create');
//     }

//     switch (true) {
//       case sub !== '' && password === '':
//         return await userLogin(email, password, nickname, given_name, picture, sub, req, res);

//       case sub === '' && password !== '':
//         return await userwithPass(email, password, nickname, given_name, picture, sub, req, res);

//       case sub !== '' && password === '':
//         return await userLogin(email, password, nickname, given_name, picture, sub, req, res);

//       case sub === '' && password !== '':
//         return await userwithPass(email, password, nickname, given_name, picture, sub, req, res);

//       // Agrega más casos según sea necesario

//       default:
//         return handleInvalidRequest(res, 'Invalid request parameters');
//     }
//   } catch (error) {
//     console.error('¡Hubo un error (en la funcion validate)!', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// // Funciones de manejo de casos
// const handleUserLogin = async (email, password, nickname, given_name, picture, sub, req, res) => {
//   // Lógica para el caso de inicio de sesión
// };

// const handleUserWithPass = async (email, password, nickname, given_name, picture, sub, req, res) => {
//   // Lógica para el caso de autenticación con contraseña
// };

// const handleInvalidRequest = (res, errorMessage) => {
//   return res.status(400).json({ error: errorMessage });
// };

// module.exports = validateUser;