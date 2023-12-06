const {User}=require('../../database');

const getUser = async()=>{
    try {
        const users = User.findAll({
            where:{deleteAt:false},
        });
        return users;
    } catch (error) {
        //throw new Error({ error: error.message });
    }
}
module.exports= getUser;