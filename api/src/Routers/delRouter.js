const {Router}=require('express');
const delRouter=Router();
//Importacion de funciones
const delGameHand = require('../Handlers/Admin/delGameHand')
const delUserHandler = require('../Handlers/Users/delUserHandler');

//========================================================================
delRouter.delete('/games/:id', delGameHand);
delRouter.delete('/user/:id', delUserHandler);

module.exports= delRouter;