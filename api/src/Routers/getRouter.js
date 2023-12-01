const { Router, request } = require("express");
const getRouter = Router();
//Importacion de funciones.
const {
  getGamesHandler,
  getGenresHandler,
  getPlatformHandler,
} = require("../Handlers/Admin/gameshandlers");
const getUserHandler= require('../Handlers/Users/getUserHandler')
const getVideogamesHandler = require("../Handlers/VideoGames/getVideogamesHandler");
const getDetailHandler= require('../Handlers/VideoGames/getDetailHandler')
//const verifyToken= require('../utils/verifyToken');
const getUserDetailHand = require("../Handlers/Users/detailUserHandler");
//======================================================================================
getRouter.get("/videogames", getVideogamesHandler);//Modulos games/videogames (Libres)
getRouter.get("/games/:id", getDetailHandler); //Modulos games/videogames (Libres)
getRouter.get("/genres", getGenresHandler); //Protegida
getRouter.get("/platforms", getPlatformHandler); //Protegida
getRouter.get("/games", getGamesHandler); //Libres
getRouter.get("/user",  getUserHandler) //Protegida
getRouter.get("/user/:id", getUserDetailHand) //Libre
//===============================================================================================

module.exports = getRouter;
