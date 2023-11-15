const {Router}=require('express');
const gamesRouter=require('./gamesRouter');


const mainRouter=Router();

mainRouter.use('/', gamesRouter);






module.exports=mainRouter;