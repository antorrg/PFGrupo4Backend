const getGameById = require('../../Controllers/VideoGames/gameDetailController')


const getDetailHandler = async (req, res) => {
    const { id } = req.params;
    try {
      const response = await getGameById(id);
      res.status(200).json(response);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };
  module.exports = getDetailHandler;