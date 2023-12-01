const { User } = require('../../database');

const delUser = async (id) => {
  try {
    //Verificar si el usuario existe y si está en true
    const user = await User.findByPk(id);
    if (user && user.enable) {
      // Actualizar el campo 'enable' a false (deshabilitar)
      await user.update({ enable: false });
      return { message: "Usuario deshabilitado exitosamente." };
    } else if (user && !user.enable) {
      // Si ya está deshabilitado, devolver un mensaje indicando eso
      return { message: "El usuari ya está deshabilitado." };
    } else {
      // Si el usuario no existe, devolver un mensaje indicando eso
      return { message: "Usuario no encontrado." };
    }
  } catch (error) {
    throw new Error("Error al deshabilitar el usuario.");
  }
};

module.exports = delUser;
