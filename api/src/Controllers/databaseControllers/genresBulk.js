const {Genre}=require('../../database');
const genresData = require('../../../Data/genres.json')


const genresBulk = async()=>{
    try {
      //Verificar si ya hay géneros en la base de datos, si no, entonces los incorpora
      const existingGenres = await Genre.findAll();
      if (existingGenres.length === 0) {
          // Hacer una lectura de genres.json para llenar la tabla
          await Genre.bulkCreate(genresData);
          console.log('"Genres" table fills succesfully.');
        } else {
          console.log('The "Genres" table already contains data.');
        }
      } catch (error) {
       console.error({error: error.message});
        
       }
  };

  module.exports = genresBulk;