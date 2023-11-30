const { Router } = require("express");
const putRouter = Router();
//Importacion de funciones:
const {gameUpdaterHand,genreUpdaterHand,platformUpdaterHand} = require("../Handlers/Admin/gameUpdaterHand");
const userUpdaterHand = require('../Handlers/Users/userUpdaterHand');
//const verifyToken= require('../utils/verifyToken')

//====================================================================================
putRouter.put("/games/:id", gameUpdaterHand); //Modulo games/videogames
putRouter.put('/user/:id', userUpdaterHand); //Modulo user
putRouter.put('/genre/:id', genreUpdaterHand); //Modulo genre
putRouter.put('/platform/:id', platformUpdaterHand); //Modulo platform

module.exports = putRouter;
