const { Router } = require("express");
const postRouter = Router();
//Importacion de funciones:
const createGameHandler = require("../Handlers/VideoGames/gamePostHandler");
const postCreateParchuseOrderHandler = require("../Handlers/Payments/postCreateParchuseOrderHandler");
const postPaymentResultWebhookHandler = require("../Handlers/Payments/postPaymentResultWebhookHandler");
//const createOrderInDBHandler = require("../Handlers/Payments/createOrderInDBHandler");
//===============================================================================
postRouter.post("/", createGameHandler); //Modulo game/videogame
postRouter.post("/createParchuseOrder", postCreateParchuseOrderHandler);
//postRouter.post("/DBcreateParchuseOrder", createOrderInDBHandler);

//Payments:
postRouter.post("/paymentResultwebhook", postPaymentResultWebhookHandler);

module.exports = postRouter;
