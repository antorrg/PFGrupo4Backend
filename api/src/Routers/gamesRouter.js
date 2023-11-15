const {Router}=require('express');
const gamesRouter=Router(); 
const {getGamesHandler,getDetailHandler, getGenresHandler}=require('../Handlers/gameshandlers');


gamesRouter.get('/genres', getGenresHandler);


gamesRouter.get('/games',(getGamesHandler));


 
gamesRouter.get('/:id',(getDetailHandler));




module.exports=gamesRouter;
