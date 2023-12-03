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
const getParchuseOrderHandler = require("../Handlers/Payments/getParchuseOrderHandler");
const getDetailHandler= require('../Handlers/VideoGames/getDetailHandler')
//const verifyToken= require('../utils/verifyToken');
const getUserDetailHand = require("../Handlers/Users/detailUserHandler");
const getDataShoppingCartHandler = require("../Handlers/Users/getDataShoppingCartHandler");
//======================================================================================
getRouter.get("/videogames", getVideogamesHandler);//Modulos games/videogames (Libres)
getRouter.get("/games/:id", getDetailHandler); //Modulos games/videogames (Libres)
getRouter.get("/genres", getGenresHandler); //Protegida
getRouter.get("/platforms", getPlatformHandler); //Protegida
getRouter.get("/games", getGamesHandler); //Libres
getRouter.get("/user",  getUserHandler) //Protegida
getRouter.get("/user/:id", getUserDetailHand) //Libre

//Payments:
getRouter.get("/getParchuseOrder", getParchuseOrderHandler);
getRouter.get("/success", (req, res) => res.send("success"));
getRouter.get("/failure", (req, res) => res.send("failure"));
getRouter.get("/pending", (req, res) => res.send("pending"));

getRouter.get("/getDataShoppingCart", getDataShoppingCartHandler);

module.exports = getRouter;