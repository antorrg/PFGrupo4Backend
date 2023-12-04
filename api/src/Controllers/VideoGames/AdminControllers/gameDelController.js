const { Videogame,Genre, Platform } = require("../../../database");

const gameDelete = async (id) => {
  try {
    //Verificar si el videojuego existe y si está en true
    const videogame = await Videogame.findByPk(id);
    if (videogame && !videogame.deleteAt) {
      // Actualizar el campo 'enable' a false (deshabilitar)
      await videogame.update({ deleteAt: true });
      return { message: "Juego con eliminado logico exitoso." };
    } else if (videogame && videogame.deleteAt) {
      // Si ya está deshabilitado, devolver un mensaje indicando eso
      return { message: "El juego ya está con eliminado logico." };
    } else {
      // Si el juego no existe, devolver un mensaje indicando eso
      return { message: "Juego no encontrado." };
    }
  } catch (error) {
    throw new Error("Error al hacer el eliminado logico en el juego.");
  }
};

const genreDelete = async (id) => {
  try {
    const genre = await Genre.findByPk(id);
    if (genre && !genre.deleteAt) {
      
      await genre.update({ deleteAt: true });
      return { message: "Genero con eliminado logico exitoso." };
    } else if (genre && genre.deleteAt) {
      
      return { message: "El genero ya está con eliminado logico." };
    } else {
      
      return { message: "Genero no encontrado." };
    }
  } catch (error) {
    throw new Error("Error al hacer el eliminado logico en el genero.");
  }
};

const platformDelete = async (id) => {
  try {
    
    const platform = await Platform.findByPk(id);
    if (platform && !platform.deleteAt) {
      
      await platform.update({ deleteAt: true });
      return { message: "Plataforma con eliminado logico exitoso." };
    } else if (platform && platform.deleteAt) {
      
      return { message: "La plataforma ya está con eliminado logico." };
    } else {
      
      return { message: "Plataforma no encontrada." };
    }
  } catch (error) {
    throw new Error("Error al hacer el eliminado logico en la plataforma.");
  }
};

module.exports = { 
  gameDelete,
  genreDelete,
  platformDelete
};
