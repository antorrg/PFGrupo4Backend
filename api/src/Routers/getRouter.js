const {Router}=require('express');
const getRouter=Router(); 
const {getGamesHandler,getDetailHandler, getGenresHandler}=require('../Handlers/gameshandlers');


getRouter.get('/genres', getGenresHandler);


getRouter.get('/games',(getGamesHandler));


getRouter.get('/:id',(getDetailHandler));




module.exports=getRouter;
