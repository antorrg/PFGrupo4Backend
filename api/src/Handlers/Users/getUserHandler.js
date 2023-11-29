const getUser = require('../../Controllers/Users/getUser')

const getUserHandler = async(req, res)=>{
    try {
        const user = await getUser();
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}
module.exports=getUserHandler;