const { Router, request } = require("express");
const getRouter = Router();
//Importacion de funciones.
const {
  getGamesHandler,
  getDetailHandler,
  getGenresHandler,
  getPlatformHandler,
} = require("../Handlers/VideoGames/gameshandlers");
const getVideogamesHandler = require("../Handlers/VideoGames/getVideogamesHandler");
//======================================================================================
getRouter.get("/games", getGamesHandler);
getRouter.get("/videogames", getVideogamesHandler);
getRouter.get("/games/:id", getDetailHandler); //Modulos games/videogames
getRouter.get("/genres", getGenresHandler);
getRouter.get("/platforms", getPlatformHandler);

//Payments:
getRouter.get("/success", (req, res) => res.send("success"));
getRouter.get("/failure", (req, res) => res.send("failure"));
getRouter.get("/pending", (req, res) => res.send("pending"));
//===============================================================================================

module.exports = getRouter;
