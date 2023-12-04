

const validateUser = ()=>{
 const user= User.findOne({
    where: email:email,
 })

}

module.exports= validateUser;