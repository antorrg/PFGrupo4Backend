const createGameDB=require('../Controllers/gamesPostController')


const createGameHandler = async(req, res) => {
        const {name,  description,image, released, genres, platform, price } = req.body;
        if(!name){ return res.status(404).json({error:"A name is required to create a videogame"});
      } 
      try {
        const response = await createGameDB(name, description, image, released, genres, platform,price);
        res.status(201).json(response);
      } catch (error) {
          //console.log(req.body);
          res.status(400).json({error:error.message});
        
        }
      }
     



module.exports = createGameHandler;