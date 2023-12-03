const { Router } = require("express");
const postRouter = Router();
//Importacion de funciones:
<<<<<<< HEAD

=======
//postRouter.post("/DBcreateParchuseOrder", createOrderInDBHandler);
>>>>>>> 97aeacd722c00312278cf8b0686b4c6eaeaa308a
const {
    createGameHandler,
    createGenreHandler,
    createPlatformHandler} = require("../Handlers/Admin/gamePostHandler");
<<<<<<< HEAD
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
    postRouter.post("/createParchuseOrder", postCreateParchuseOrderHandler);
    postRouter.post("/paymentResultwebhook", postPaymentResultWebhookHandler);
    //postRouter.post("/DBcreateParchuseOrder", createOrderInDBHandler);
=======
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
>>>>>>> 97aeacd722c00312278cf8b0686b4c6eaeaa308a


module.exports = postRouter;
