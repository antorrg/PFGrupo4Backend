
const datamaped =(info)=> {
    return{
    id: info.id,
    name: info.name,
    description: info.description,
    image: info.image,
    released: info.released,
    price: info.price,
    enable: info.enable,
    genres: info.Genres.map(genre => genre.name).join(', '), // Mapear a un arreglo de nombres y unir con comas y espacios.
    platforms: info.Platforms.map(platform => platform.name).join(', '), 
  }
   };

  module.exports= datamaped;