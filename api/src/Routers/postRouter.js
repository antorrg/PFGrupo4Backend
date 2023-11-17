const {Router}=require('express');
const createGameHandler = require('../Handlers/gamePostHandler')

const postRouter=Router(); 

postRouter.post('/',(createGameHandler));

module.exports = postRouter;