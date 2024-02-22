const {Router}=require('express');
const {addFavHandler, getFavHandler, delfavHandler}= require('../Handlers/favHandlers/favoriteHandlers')
const verifyToken = require ('../utils/verifyToken')
const favRouter = Router();

favRouter.post('/favorite', verifyToken, addFavHandler);

favRouter.get('/favorite', verifyToken, getFavHandler);

favRouter.delete('/favorite/:id', verifyToken, delfavHandler)

module.exports = favRouter;