const {
  getAllGames,
  getGameById,
  genres,
  platforms,
} = require("../../Controllers/VideoGames/AdminControllers/gamesControllers");

const getGamesHandler = async (req, res) => {
  try {
    const response = await getAllGames();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getGenresHandler = async (req, res) => {
  try {
    const response = await genres();
    if (response.length === 0) {
      res.status(404).json({ error: "No genres found" });
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPlatformHandler = async (req, res) => {
  try {
    const response = await platforms();
    if (response.length === 0) {
      res.status(404).json({ error: "No platforms found" });
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getGamesHandler,
  getGenresHandler,
  getPlatformHandler,
};
