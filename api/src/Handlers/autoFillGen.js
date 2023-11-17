const {cleanGenre}=require('../Controllers/index');
const {Genre}=require('../database');
const axios= require('axios');
require('dotenv').config();
const {URL_GEN, API_KEY} = process.env;

const fillGenTable = async(req,res)=>{
    try {
      //Verificar si ya hay géneros en la base de datos, si no, entonces los incorpora
      const existingGenres = await Genre.findAll();
      if (existingGenres.length === 0) {
          // Hacer una solicitud a la API para obtener datos de géneros
          const response = (await axios.get(`${URL_GEN}key=${API_KEY}`)).data;
          const genresData= response;
          console.log(genresData)
          await Genre.bulkCreate(cleanGenre(genresData));
          console.log('"Genres" table fills succesfully.');
        } else {
          console.log('The "genres" table already contains data.');
        }
      } catch (error) {
       console.error({error: error.message});
        
       }
  };

  module.exports=fillGenTable;