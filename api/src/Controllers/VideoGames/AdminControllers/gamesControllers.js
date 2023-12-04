const { Genre, Platform, Videogame } = require("../../../database");
const {datamaped} = require("../../../utils/dataMaped");

const getAllGames = async () => {
  try {
    const allGames = await Videogame.findAll({
      include: [
        {
          model: Genre,
          attributes: ["name"],
          through: { attributes: [] },
        },
        {
          model: Platform,
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
    });
    // Transformar los datos antes de devolverlos
    const transformedGames = allGames.map((game) => datamaped(game));

    return transformedGames;
  } catch (error) {
    throw new Error({ error: error.message });
  }
};

const genres = async (req, res) => {
  const genresDb = await Genre.findAll();
  return genresDb;
};

const platforms = async (req, res) => {
  const platformsDb = await Platform.findAll();
  return platformsDb;
};

module.exports = {
  getAllGames,
  genres,
  platforms,
};
