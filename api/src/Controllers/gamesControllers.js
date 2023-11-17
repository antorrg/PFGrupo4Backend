const axios= require('axios');
const {Genre, Videogame}=require('../database')
const {infoCleaner,infoClean2 } = require('./index');
const URL = "https://api.rawg.io/api/";
const API_KEY= "ac1f67878bb04531ba13710b8cf5de88";

const getAllGames = async ()=> {
  try {
    const gamesAPI = [];
    for(let page = 1; page<=2; page++){
    const url = `${URL}games?key=${API_KEY}&page=${page}`
    //const url="https://www.freetogame.com/api/games"
    const infoApi = (await axios.get(url)).data;
    const gamesFiltered = infoCleaner(infoApi);
    gamesAPI.push(gamesFiltered)
    }
    
    const gamesApiF = gamesAPI.flat(1);

  return gamesApiF;

  
    // const  gamesDb = await Videogame.findAll();
    // return gamesDb;
  
  
  } catch (error) {
    throw new Error({error:error.message})
  }
   
};

const getGameById= async(id)=>{
  try {
        const info=(await axios.get(`${URL}games/${id}?key=${API_KEY}`)).data;
        const infoWash = infoClean2(info);
        return infoWash;
  } catch (error) {
    throw new Error(error);
  } 
};


// const genres = async(req,res)=>{
//     try {
//           const response = (await axios.get(`${URL}genres?key=${API_KEY}`)).data;
//           const genresData= response;
//           return genresData;
//       } catch (error) {
//        console.error({error: error.message});
        
//        }
//   };
const genres = async(req,res)=>{
  const  genresDb = await Genre.findAll();
  return genresDb;
};








module.exports = {
    getAllGames,
    getGameById,
    genres
}
