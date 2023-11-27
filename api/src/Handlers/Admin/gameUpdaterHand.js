const gameUpdPrice = require("../../Controllers/VideoGames/AdminControllers/gameUpdPrice");

const gameUpdaterHand = async (req, res) => {
  const { id } = req.params;
  const newPrice = req.body;
  try {
    const response = await gameUpdPrice(id, newPrice);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = gameUpdaterHand;
