const {
  gameSetFalse,
  genreSetFalse,
  platformSetFalse} = require("../../Controllers/VideoGames/AdminControllers/gameSetFalse");

const delGameHand = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await gameSetFalse(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const delGenreHand = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await genreSetFalse(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const delPlatformHand = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await platformSetFalse(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  delGameHand,
  delGenreHand,
  delPlatformHand
};
