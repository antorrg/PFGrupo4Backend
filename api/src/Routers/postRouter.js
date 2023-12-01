const { Router } = require("express");
const postRouter = Router();
//Importacion de funciones:
const {
    createGameHandler,
    createGenreHandler,
    createPlatformHandler} = require("../Handlers/Admin/gamePostHandler");
const userLogHandler = require('../Handlers/Users/userLogHandler')
const postCreateParchuseOrderHandler = require("../Handlers/Payments/postCreateParchuseOrderHandler");
const postPaymentResultWebhookHandler = require("../Handlers/Payments/postPaymentResultWebhookHandler");
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
//postRouter.post("/DBcreateParchuseOrder", createOrderInDBHandler);


module.exports = postRouter;
