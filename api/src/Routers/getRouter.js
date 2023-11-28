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
const verifyToken= require('../utils/verifyToken')
//======================================================================================
getRouter.get("/videogames", getVideogamesHandler);
getRouter.get("/games/:id", getDetailHandler); //Modulos games/videogames
getRouter.get("/genres", getGenresHandler);
getRouter.get("/platforms", getPlatformHandler);
getRouter.get("/games", getGamesHandler);
getRouter.get("/user", verifyToken, getUserHandler)
//===============================================================================================

module.exports = getRouter;
