const {userLogin} = require('../../Controllers/Users/userLogin')

const userLogHandler = async(req,res)=>{
    //console.log(' apenitas llegue aquí el handler')
    const {email, password, nickname, given_name, picture, sub}=req.body;
    //console.log(req.body+' hasta aquí el handler')
    try{
        const send = await userLogin(email, password, nickname, given_name, picture, sub);
        res.status(201).json(send);
    }catch(error){
         res.status(400).json({error:error.message});
    }
     
}
module.exports = userLogHandler;

