const getVideogames = require("../../Controllers/VideoGames/getVideogames");
const { Op } = require("sequelize");

const getVideogamesHandler = async (req, res) => {
  const {
    page = 0,
    size = 5,
    platforms,
    genres,
    minPrice,
    maxPrice,
    onlyPrice,
    name,
  } = req.query;

  let filters = {};
  let platformsFilters = {};
  let genresFilters = {};

  // Verifica si se proporciona el parámetro de filtro 'platform'
  if (platforms) {
    const arrayPlatforms = platforms.split(",");
    platformsFilters.name = { [Op.in]: arrayPlatforms };
  }

  // Verifica si se proporciona el parámetro de filtro 'genre'
  if (genres) {
    const arrayGenres = genres.split(",");
    genresFilters.name = { [Op.in]: arrayGenres };
  }

  // Verifica si se proporciona el parámetro de filtro 'precio'
  if (minPrice && maxPrice) {
    filters.price = { [Op.between]: [+minPrice, +maxPrice] };
  } else if (minPrice) {
    filters.price = { [Op.gte]: +minPrice };
  } else if (maxPrice) {
    filters.price = { [Op.lte]: +maxPrice };
  }

  //Verificar si se esta buscando algun nombre en particular
  if (name) {
    filters.name = { [Op.iLike]: `%${name}%` };
  }

  try {
    const videogamesData = await getVideogames(
      page,
      size,
      filters,
      platformsFilters,
      genresFilters
    );
    res.status(201).json(videogamesData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getVideogamesHandler;
