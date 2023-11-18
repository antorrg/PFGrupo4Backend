const getVideogames = require("../Controllers/getVideogames");

const getVideogamesHandler = async (req, res) => {
    const {page = 0, size = 5} = req.query;
    try {
        const videogamesData = await getVideogames(page, size);
        res.status(201).json(videogamesData);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

module.exports = getVideogamesHandler;