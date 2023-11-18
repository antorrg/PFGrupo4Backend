const axios= require('axios');
const {Genre, Platform, Videogame}=require('../database')
const {infoClean2 } = require('./index');
const URL = "https://api.rawg.io/api/";
const API_KEY= "ac1f67878bb04531ba13710b8cf5de88";
const includeModels = require('../utils/includeModels')

const getAllGames = async () => {
  try {
      const gamesCreated = await includeModels(Videogame, [{ model: Genre }, { model: Platform }]);
      return gamesCreated;
  } catch (error) {
      throw new Error({ error: error.message });
  }
};

// const getGameById= async(id)=>{
//   try {
//         const info=(await axios.get(`${URL}games/${id}?key=${API_KEY}`)).data;
//         const infoWash = infoClean2(info);
//         return infoWash;
//   } catch (error) {
//     throw new Error(error);
//    } 
//  };
const getGameById = async (id) => {
  try {
    const infodb = await Videogame.findByPk(id, {
      include: [
        {
          model: Genre,
          attributes: ['name'],
          through: { attributes: [] }
        },
        {
          model: Platform,
          attributes: ['name'],
          through: { attributes: [] }
        }
      ]
    });

    if (!infodb) {
      throw new Error("Videogame not found");
    }

    return infodb;
  } catch (error) {
    throw new Error({ error: error.message });
  }
};


const genres = async(req,res)=>{
  const  genresDb = await Genre.findAll();
  return genresDb;
};

const platforms = async(req,res)=>{
  const  platformsDb = await Platform.findAll();
  return platformsDb;
};



module.exports = {
    getAllGames,
    getGameById,
    genres,
    platforms
}
