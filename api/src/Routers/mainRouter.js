const {Router}=require('express');
const getRouter=require('./getRouter');
const postRouter = require('./postRouter');
const putRouter = require('./putRouter');
const delRouter =require('./delRouter');
const favRouter = require('./favRouter');



const mainRouter=Router();

mainRouter.use('/', getRouter);

mainRouter.use('/post', postRouter);

mainRouter.use('/put',  putRouter);

mainRouter.use('/delete', delRouter);

mainRouter.use(favRouter);





module.exports=mainRouter;