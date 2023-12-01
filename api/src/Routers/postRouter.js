const { Router } = require("express");
const postRouter = Router();
//Importacion de funciones:
const {
    createGameHandler,
    createGenreHandler,
    createPlatformHandler} = require("../Handlers/Admin/gamePostHandler");
const userLogHandler = require('../Handlers/Users/userLogHandler')
//const verifyToken= require('../utils/verifyToken')

//===============================================================================
postRouter.post("/",  createGameHandler); //Modulo game/videogame
postRouter.post("/genre",  createGenreHandler);
postRouter.post("/platform", createPlatformHandler);
postRouter.post("/user", userLogHandler);


module.exports = postRouter;
