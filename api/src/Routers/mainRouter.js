const {Router}=require('express');
const getRouter=require('./getRouter');
const postRouter = require('./postRouter');
//const putRouter = require('./putRouter');


const mainRouter=Router();

mainRouter.use('/', getRouter);

mainRouter.use('/post', postRouter);

//mainRouter.use('/put', putRouter);






module.exports=mainRouter;