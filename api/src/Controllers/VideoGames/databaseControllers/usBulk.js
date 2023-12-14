const {userData}=require('../../../../Data/indexData');
const {User}=require('../../../database');


const usBulk = async()=>{
for (let i = 0; i <userData.length; i++) {
    const user = userData[i];

    try {
        // Llamar al controlador post aquí, usando los datos del juego
        await userInits( user.email, user.password, user.nickname, user.given_name, user.picture, user.sub, user.role, user.enable, user.deleteAt,);

    } catch (error) {
        console.error(`Error when posting the user ${user.given_name}: ${error.message}`);
    }
}
}



const userInits = async (email,password,nickname,given_name,picture,sub, role,enable,deleteAt,) => {

    try {
      // Buscar el usuario por email
          const newUser = await User.create({
            email: email,
            password: password,
            nickname: nickname,
            given_name: given_name,
            picture:picture,
            sub: sub,
            role:role ?? 0,
            enable:enable ?? true,
            deleteAt:deleteAt ?? false
          });
          const result = { isCreate: true, user: newUser };
          return result;
       
    } catch (error) {
      console.error("Error al crear usuario:", error);
      throw error;
    }
  };
  module.exports= usBulk;