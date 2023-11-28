const { Router } = require("express");
const putRouter = Router();
//Importacion de funciones:
const gameUpdaterHand = require("../Handlers/Admin/gameUpdaterHand");
//const verifyToken= require('../utils/verifyToken')

//====================================================================================
putRouter.put("/games/:id", gameUpdaterHand); //Modulo games/videogames

module.exports = putRouter;
