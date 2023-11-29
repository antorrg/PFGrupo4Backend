const gameSetFalse = require("../../Controllers/VideoGames/AdminControllers/gameSetFalse");

const delGameHand = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await gameSetFalse(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = delGameHand;
