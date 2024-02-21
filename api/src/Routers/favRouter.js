const {Router}=require('express');
const {addFavHandler, getFavHandler, delfavHandler}= require('../Handlers/favHandlers/favoriteHandlers')

const favRouter = Router();

favRouter.post('/favorite', addFavHandler);

favRouter.get('/favorite', getFavHandler);

favRouter.delete('/favorite/:id', delfavHandler)

module.exports = favRouter;