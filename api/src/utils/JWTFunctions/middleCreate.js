import bcrypt from 'bcrypt';

const middleCreate = async (req, res, next)=>{
    const{email, password}= req.body;
    // Validar si existe el email y su formato usando una expresión regular
    if(!email){return res.status(400).json({error: "missing email"})};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {return res.status(400).json({ error: "invalid email format" });}

    if(!password){return res.status(400).json({error: "missing password"})};
    
    if(password){
        const hashedPassword = await bcrypt.hash(password, 10);
        req.body.password= hashedPassword;
    }
    next();
}

export default middleCreate;