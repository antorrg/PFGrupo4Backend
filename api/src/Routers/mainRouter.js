const {Router}=require('express');
const getRouter=require('./getRouter');


const mainRouter=Router();

mainRouter.use('/', getRouter);






module.exports=mainRouter;