const { Router } = require("express");
const postRouter = Router();
//Importacion de funciones:
const createGameHandler = require("../Handlers/VideoGames/gamePostHandler");

//===============================================================================
postRouter.post("/", createGameHandler); //Modulo game/videogame

module.exports = postRouter;
