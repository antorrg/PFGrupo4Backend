const { Videogame, Genre, Platform} = require("../database");


const createGameDB = async (name, description, image, released, genres, platforms, price, req, res) => {
  try {
      const [newGame, create] = await Videogame.findOrCreate({
          where: {
              name: name
          },
          defaults: {
              description,
              image,
              released,
              price,
          }
      });

      if (create) {
          // Buscar los objetos de género correspondientes en la base de datos
        //   const dbGenres = await Genre.findAll({
        //       where: { name: genres },
        //   });

          // Asociar los géneros al nuevo juego
          await newGame.addGenres(genres);
          //Buscar los objetos de plataforma correspondientes en la base de datos
          //   const dbPlatforms = await Platform.findAll({
              //       where: { name: platforms },
              //   });
              
              // Asociar las plataformas al nuevo juego
              
            await newGame.addPlatforms(platforms);
              
       }

      const result = { isCreate: create, game: newGame };
      return result;
  } catch (error) {
     console.log('algo malo pasó acá 🤔');
  }
};

module.exports = createGameDB;
