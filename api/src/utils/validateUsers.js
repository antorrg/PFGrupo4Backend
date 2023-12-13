const bcrypt = require('bcrypt');
require('dotenv').config();
const {SUDO_AUTH } = process.env;


const validUserCreate = async(req, res, next)=>{
    const { email, password, sub } = req.body;

    if (!email) {
        return res.status(400).json({ error: "missing email" });
    }
    if (!password && !sub) {
        return res.status(400).json({ error: "missing password or sub" });
    }
    if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        req.body.password = hashedPassword;
    }
    


    next();
};

const validUserLog = (req, res, next)=>{
    const { email, password } = req.body;
    if (!email) {return res.status(400).json({ error: "missing email" });}
    if (!password) {return res.status(400).json({ error: "missing password" });}
    next ();
};

const validUserSu = (req, res, next)=>{
        const providedToken = req.headers['x-access-token'];
        // Verifica si el token está presente
        if (!providedToken) {return res.status(401).json({ error: 'Acceso no autorizado.' });}
        if (providedToken !== SUDO_AUTH) {return res.status(403).json({ error: 'Acceso no autorizado.' });}
    
        next();
    
};

module.exports= { 
    validUserCreate,
    validUserLog,
    validUserSu 
}