const {  getAllGames, getGameById, genres} = require('../Controllers/gamesControllers');

const getGamesHandler= async (req,res)=>{
        try {
                const response = await getAllGames()
                res.status(200).json(response);
        } catch (error) {
            res.status(404).json({error:error.message});
        }
    
 };

const getDetailHandler = async (req,res)=>{
    const {id} = req.params;
    try {
        const response = await getGameById(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({error:error.message});
    }
};

const getGenresHandler = async (req, res) => {
    try {
        const response = await genres();
            res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



module.exports = {
    getGamesHandler,
    getDetailHandler,
    getGenresHandler 
}