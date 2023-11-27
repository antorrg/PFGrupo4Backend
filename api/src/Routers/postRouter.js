const { Router } = require("express");
const postRouter = Router();
//Importacion de funciones:
const createGameHandler = require("../Handlers/Admin/gamePostHandler");
const userLogHandler = require('../Handlers/Users/userLogHandler')
//const verifyToken= require('../utils/verifyToken')

//===============================================================================
postRouter.post("/",  createGameHandler); //Modulo game/videogame
postRouter.post("/user", userLogHandler);

module.exports = postRouter;
