const { Videogame, Genre, Platform } = require("../../../database");

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

const createGenreDB = async (name) => {
    try {
    const [newGenre, create] = await Genre.findOrCreate({ where: {name: name}});
    const result = { isCreate: create, game: newGenre };
    return result;
  } catch (error) {
    return {error: error.message};
  }
};

const createPlatformDB = async (name) => {
  try {
  const [newPLatform, create] = await Platform.findOrCreate({ where: {name: name}});
  const result = { isCreate: create, game: newPLatform };
  return result;
} catch (error) {
  return {error: error.message};
}
};

module.exports = {
  createGameDB,
  createGenreDB,
  createPlatformDB
};
