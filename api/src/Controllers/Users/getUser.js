const {User}=require('../../database');

const getUser = async()=>{
    try {
        const users = User.findAll();
        return users;
    } catch (error) {
        console.log('aquí no hay nada')
        //throw new Error({ error: error.message });
    }
}
module.exports= getUser;