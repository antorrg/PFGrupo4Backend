const {User}=require('../../database')

const userUpdController = async (id, newData)=>{
    try {
        const user = await User.findByPk(id);
    
        if (!user) {
          return { error: "Usuario no encontrado" };
        }
    
        // Convertir campos a sus tipos respectivos antes de actualizar
        const parsedData = {
          given_name: newData.given_name,
          picture: newData.picture,
          role: parseFloat(newData.role), //convertir a numero
          country: newData.country,
          enable: Boolean(newData.enable), // Convertir a booleano
        };
    
        // Validar que el campo numérico sea válido después de la conversión
        if (
          isNaN(parsedData.role)
         
        ) {
          return { error: "El campo numérico no es válido" };
        }
    
        // Actualizar todos los campos
        await user.update(parsedData);
        return user;
      } catch (error) {
        console.error("Error al actualizar el usuario:", error);
        return { error: "Error interno del servidor" };
      }
}

module.exports = userUpdController;