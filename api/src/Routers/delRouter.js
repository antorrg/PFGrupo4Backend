const {Router}=require('express');
const delRouter=Router();
//Importacion de funciones
const delGameHand = require('../Handlers/VideoGames/delGameHand')

//========================================================================
delRouter.delete('/games/:id', delGameHand)

module.exports= delRouter;