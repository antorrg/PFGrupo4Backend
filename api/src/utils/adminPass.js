const {User}=require('../database')

async function getUserIdByEmail(email) {
    try {
      const user = await User.findOne({
        attributes: ['id'],
        where: {email},
      });
      return user ? user.id : null;
    } catch (error) {
      console.error('Error al obtener el ID del usuario por correo electrónico:', error);
      throw error;
    }
  }
  
  module.exports =  getUserIdByEmail;
