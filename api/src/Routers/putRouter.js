const { Router } = require("express");
const putRouter = Router();
//Importacion de funciones:
const gameUpdaterHand = require("../Handlers/Admin/gameUpdaterHand");
const userUpdaterHand = require('../Handlers/Users/userUpdaterHand');
//const verifyToken= require('../utils/verifyToken')

//====================================================================================
putRouter.put("/games/:id", gameUpdaterHand); //Modulo games/videogames
putRouter.put('/user/:id', userUpdaterHand); //Modulo user

module.exports = putRouter;
