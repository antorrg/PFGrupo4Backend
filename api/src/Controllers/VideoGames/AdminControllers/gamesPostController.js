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
        deleteAt: false
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
    const existingGenre = await Genre.findOne({
      where: { name: name, deleteAt: false },
    });
    if (existingGenre) {
      throw new Error("Este género ya existe");
    } else {
      try {
        const [newGenre, created] = await Genre.findOrCreate({
          where: { name: name, deleteAt: false },
        });

        const result = { isCreate: created, genre: newGenre };
        return result;
      } catch (createError) {
        throw new Error("Error al crear el género");
      }
    }
  } catch (error) {
    throw error;
  }
};



const createPlatformDB = async (name) => {
  try {
    const existingPlatform = await Platform.findOne({
      where: { name: name, deleteAt: false },
    });
    if (existingPlatform) {
      throw new Error("Esta plataforma ya existe");
    } else {
      try {
        const [newPLatform, create] = await Platform.findOrCreate({ where: {name: name, deleteAt: false}});
      const result = { isCreate: create, game: newPLatform };
      return result;
      } catch (error) {
        throw new Error("Error al crear la plataforma")
      }
    }
} catch (error) {
  throw error;
}
};

module.exports = {
  createGameDB,
  createGenreDB,
  createPlatformDB
};
