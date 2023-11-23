const { Router } = require("express");
const putRouter = Router();
//Importacion de funciones:
const gameUpdaterHand = require("../Handlers/VideoGames/gameUpdaterHand");

//====================================================================================
putRouter.put("/games/:id", gameUpdaterHand); //Modulo games/videogames

module.exports = putRouter;
