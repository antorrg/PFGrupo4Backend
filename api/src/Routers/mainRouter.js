const {Router}=require('express');
const getRouter=require('./getRouter');
const postRouter = require('./postRouter');


const mainRouter=Router();

mainRouter.use('/', getRouter);

mainRouter.use('/post', postRouter);






module.exports=mainRouter;