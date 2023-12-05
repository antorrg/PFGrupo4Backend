const { Router } = require("express");
const postRouter = Router();
//Importacion de funciones:
//postRouter.post("/DBcreateParchuseOrder", createOrderInDBHandler);
const {
    createGameHandler,
    createGenreHandler,
    createPlatformHandler} = require("../Handlers/Admin/gamePostHandler");
const userLogHandler = require('../Handlers/Users/userLogHandler')
const postCreateParchuseOrderHandler = require("../Handlers/Payments/postCreateParchuseOrderHandler");
const postPaymentResultWebhookHandler = require("../Handlers/Payments/postPaymentResultWebhookHandler");
const postUserShoppingCartHandler = require("../Handlers/Users/postUserShoppingCartHandler");
const postVideogamesByIdsHandler = require("../Handlers/VideoGames/postVideogamesByIdsHandler");
//const createOrderInDBHandler = require("../Handlers/Payments/createOrderInDBHandler");
//const verifyToken= require('../utils/verifyToken')

//===============================================================================
postRouter.post("/",  createGameHandler); //Modulo game/videogame
postRouter.post("/genre",  createGenreHandler);
postRouter.post("/platform", createPlatformHandler);
postRouter.post("/user", userLogHandler);
//Payments:
postRouter.post("/paymentResultwebhook", postPaymentResultWebhookHandler);
postRouter.post("/createParchuseOrder", postCreateParchuseOrderHandler);

//User Cart:
postRouter.post("/createShoppingCart", postUserShoppingCartHandler);

postRouter.post("/videogamesByIds", postVideogamesByIdsHandler);


module.exports = postRouter;
