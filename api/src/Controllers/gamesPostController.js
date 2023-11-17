
const { Videogame, Genre, Platform} = require("../database");

const createGameDB = async (name,description,image,released, genres,platform,price,req,res) => {
    console.log('este es el nombre '+ name)
  try {
// if (!name || !description || !image || !released || !genres || !platform || price === undefined) {
//   throw new Error("Missing or invalid input data")
   
//  }

//   const videoGFound = Videogames.find((game) => game.name.toLowerCase() === name.toLowerCase()
//   );
//   if (videoGFound) {
//     throw new Error("This game already exists")
  
 // } else {
  
  //const genreArray = genres.split(',').map(genre => genre.trim());
      
        const [newGame, create] = await Videogame.findOrCreate({
          where:{
            name:name
          },
          defaults:{
          description,
          image,
          released,
          price,
          }
        });
        if(create){
        // // Buscar los objetos de género correspondientes en la base de datos
        // const dbGenres = await Genre.findAll({
        //   where: { name: genres },
        // });
  
        // // Asociar los géneros al nuevo juego
        // await newGame.addGenres(dbGenres);

        // // Buscar los objetos de platform correspondientes en la base de datos
        // const dbPlat = await Platform.findAll({
        //     where: { name: platforms },
        //   });
    
        //   // Asociar las platform al nuevo juego
        //   await newGame.addPlatform(dbPlat);
        }
        const result ={isCreate: create, game: newGame}
        return result;
  //}
} 
catch(error){
  return res.status(500).json({ error: error.message });
}

};

module.exports = createGameDB;
