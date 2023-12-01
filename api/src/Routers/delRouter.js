const {Router}=require('express');
const delRouter=Router();
//Importacion de funciones
const delUserHandler = require('../Handlers/Users/delUserHandler');
const {
    delGameHand,
    delGenreHand,
    delPlatformHand} = require('../Handlers/Admin/delGameHand')

//========================================================================
delRouter.delete('/games/:id', delGameHand);
delRouter.delete('/genres/:id', delGenreHand);
delRouter.delete('/platforms/:id', delPlatformHand);
delRouter.delete('/user/:id', delUserHandler);

module.exports= delRouter;