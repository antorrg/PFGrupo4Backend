const { Router } = require("express");
const putRouter = Router();
//Importacion de funciones:
const gameUpdaterHand = require("../Handlers/VideoGames/gameUpdaterHand");
const putUserShoppingCartHandler = require("../Handlers/Users/putUserShoppingCartHandler");

//====================================================================================
putRouter.put("/games/:id", gameUpdaterHand); //Modulo games/videogames
putRouter.put("/userShoppingCart/:userID", putUserShoppingCartHandler);

module.exports = putRouter;
