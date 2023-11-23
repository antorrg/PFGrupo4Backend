
const datamaped =(info)=> {
    return{
    id: info.id,
    name: info.name,
    description: info.description,
    image: info.image,
    released: info.released,
    price: info.price,
    physicalGame: info.physicalGame,
		stock: info.stock,
    enable: info.enable,
    Genres: info.Genres.map(genre => genre.name), 
    Platforms: info.Platforms.map(platform => platform.name), 
  }
   };

  module.exports= datamaped;
