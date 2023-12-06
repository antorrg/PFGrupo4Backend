const bcrypt = require('bcrypt');

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

module.exports= {
    validUserCreate,
    validUserLog
}