const gameUpdVideogame = require("../../Controllers/VideoGames/AdminControllers/gameUpdPrice");

const gameUpdaterHand = async (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  try {
    const response = await gameUpdVideogame(id, newData);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = gameUpdaterHand;
