const {Router, request}=require('express');
const getRouter=Router(); 
const {getGamesHandler,getDetailHandler, getGenresHandler}=require('../Handlers/gameshandlers');

const getVideogamesHandler = require('../Handlers/getVideogamesHandler');

getRouter.get('/genres', getGenresHandler);


getRouter.get('/games',(getGamesHandler));


getRouter.get('/videogame/:id',(getDetailHandler));


getRouter.get('/videogames',(getVideogamesHandler));

module.exports=getRouter;
