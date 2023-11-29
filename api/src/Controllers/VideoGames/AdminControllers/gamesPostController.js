const { Videogame } = require("../../../database");

const createGameDB = async (
  name,
  description,
  image,
  released,
  genres,
  platforms,
  price,
  physicalGame,
  stock,
  req,
  res
) => {
  //console.log(name+'/'+description+'/'+image+'/'+released+'/'+genres+'/'+platforms+'/'+price+'/'+physicalGame+'/'+stock)
  try {
    const [newGame, create] = await Videogame.findOrCreate({
      where: {
        name: name,
      },
      defaults: {
        description,
        image,
        released,
        price,
        physicalGame,
        stock,
      },
    });

    if (create) {
      // Asociar los géneros al nuevo juego
      await newGame.addGenres(genres);
      await newGame.addPlatforms(platforms);
    }
    const result = { isCreate: create, game: newGame };
    return result;
  } catch (error) {
    console.log("¡algo malo pasó acá!");
  }
};

module.exports = createGameDB;
