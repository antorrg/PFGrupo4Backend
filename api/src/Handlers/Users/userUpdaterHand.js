const userUpdController= require('../../Controllers/Users/userUpdController');

const userUpdaterHand = async(req,res)=>{
    const {id} = req.params;
    const newData = req.body;
    try {
        const response = await userUpdController(id, newData);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

module.exports = userUpdaterHand;