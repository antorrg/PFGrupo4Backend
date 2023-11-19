const {Router}=require('express');
//const xxxx = require('../')

const putRouter=Router(); 

putRouter.put('/:id',(updaterHandler));

module.exports = putRouter;