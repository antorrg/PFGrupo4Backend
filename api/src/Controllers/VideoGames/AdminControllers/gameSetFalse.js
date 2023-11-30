const { Videogame,Genre, Platform } = require("../../../database");

const gameSetFalse = async (id) => {
  try {
    //Verificar si el videojuego existe y si está en true
    const videogame = await Videogame.findByPk(id);
    if (videogame && videogame.enable) {
      // Actualizar el campo 'enable' a false (deshabilitar)
      await videogame.update({ enable: false });
      return { message: "Juego deshabilitado exitosamente." };
    } else if (videogame && !videogame.enable) {
      // Si ya está deshabilitado, devolver un mensaje indicando eso
      return { message: "El juego ya está deshabilitado." };
    } else {
      // Si el juego no existe, devolver un mensaje indicando eso
      return { message: "Juego no encontrado." };
    }
  } catch (error) {
    throw new Error("Error al deshabilitar el juego.");
  }
};

const genreSetFalse = async (id) => {
  try {
    const genre = await Genre.findByPk(id);
    if (genre && genre.enable) {
      
      await genre.update({ enable: false });
      return { message: "Genero deshabilitado exitosamente." };
    } else if (genre && !genre.enable) {
      
      return { message: "El genero ya está deshabilitado." };
    } else {
      
      return { message: "Genero no encontrado." };
    }
  } catch (error) {
    throw new Error("Error al deshabilitar el genero.");
  }
};

const platformSetFalse = async (id) => {
  try {
    
    const platform = await Platform.findByPk(id);
    if (platform && platform.enable) {
      
      await platform.update({ enable: false });
      return { message: "Plataforma deshabilitada exitosamente." };
    } else if (platform && !platform.enable) {
      
      return { message: "La plataforma ya está deshabilitada." };
    } else {
      
      return { message: "Plataforma no encontrada." };
    }
  } catch (error) {
    throw new Error("Error al deshabilitar la plataforma.");
  }
};

module.exports = { 
  gameSetFalse,
  genreSetFalse,
  platformSetFalse
};
