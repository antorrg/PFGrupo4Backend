const { User } = require("../../database");
const generateToken = require("../../utils/generate");
const bcrypt = require("bcrypt");
const saltRounds = 10; // Número de rondas de salt para bcrypt
const sendEmailWelcome = require("../../nodemailer/sendEmail");

//? Funcion userLogin (para crear o validar a un usuario en base a auth0)

const userLogin = async (email, password, nickname, given_name, picture, sub, req, res) => {
  try {
    // Busca el usuario por el email
    const existingUser = await User.findOne({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      // El usuario ya existe, envía un mensaje indicando que está autenticado
      let result = { isCreate: false, user: existingUser };
      // console.log(result+' usuario existente')
      // Genera el token
      const token = generateToken(existingUser);
      // Agrega el token al body de la respuesta
      return { result, token };
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
      // Genera el token
      const token = generateToken(newUser);

      // Enviar email de bienvenida
      await sendEmailWelcome(result.user.email, result.user.nickname);
      // Agrega el token al body de la respuesta
      return { result, token };
    }
  } catch (error) {
    console.error("¡Hubo un error!", error);
    throw error;
  }
};
//? Funcion UserwithPass para registrar a un nuevo usuario en base a pasword y...
//? validar a un usuario en base a password
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const userwithPass = async (email, password, nickname, given_name, picture, sub, req, res) => {
  // Método para registrar un nuevo usuario
  try {
    // Buscar el usuario por email
    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      // Hashear la contraseña antes de almacenarla en la base de datos
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      // Crear el nuevo usuario en la base de datos con la contraseña hasheada
      const newUser = await User.create({
        email: email,
        password: hashedPassword,
        nickname: nickname,
        given_name: given_name,
        picture: picture,
        sub: "",
      });
      const token = generateToken(newUser);

      return { result: newUser, token };
    } else {

      // Comparar la contraseña ingresada con la contraseña hasheada almacenada en la base de datos
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        // Contraseña válida, puedes generar y enviar un token de sesión aquí si es necesario
        if (user) {
          // El usuario ya existe, envía un mensaje indicando que está autenticado
          let result = { isCreate: false, user: user };
          // console.log(result+' usuario existente')
          // Genera el token
          const token = generateToken(user);

          return { result, token };
        } else {
          // Contraseña incorrecta
          return res.status(401).json({ error: "Credenciales inválidas" });
        }
      }
    }
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

//?>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const userUpdPass = async (email, password, nickname, given_name, picture, sub, req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user.password) {
      // El usuario no tiene una contraseña almacenada, crea una nueva
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      await user.update({ password: hashedPassword });
    } else {
      // Verificar si la nueva contraseña es diferente de la actual
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        // Actualizar solo el campo de la contraseña
        await user.update({ password: password });
      }
      const token = generateToken(user);

      return { result: user, token };
    }
    } catch (error) {
      console.error("Error al colocar el password:", error);
      return { error: "Error interno del servidor" };
    }
};
//*=============================================================================================
const userUpdSub = async (email, password, nickname, given_name, picture, sub, req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
  
      if (user && !user.sub) {
          // Actualizar solo el campo del sub
          await user.update({ sub: sub });
        }
      const token = generateToken(user);
      return { result: user, token };

    } catch (error) {
      console.error("Error al colocar el sub:", error);
      return { error: "Error interno del servidor" };
    }
  };
  

module.exports = {
  userLogin,
  userwithPass,
  userUpdPass,
  userUpdSub,
};
