const {Router, request}=require('express');
const getRouter=Router(); 
const {getGamesHandler,getDetailHandler, getGenresHandler, getPlatformHandler}=require('../Handlers/gameshandlers');

const getVideogamesHandler = require('../Handlers/getVideogamesHandler');

getRouter.get('/genres', getGenresHandler);
getRouter.get('/platforms', getPlatformHandler)

getRouter.get('/games',(getGamesHandler));

getRouter.get('/games/:id',(getDetailHandler));


getRouter.get('/videogames',(getVideogamesHandler));

module.exports=getRouter;
