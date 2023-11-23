const { Videogame } = require("../../database");

const gameUpdPrice = async (id, newPrice) => {
  try {
    // Verificar si el videojuego existe
    const videogame = await Videogame.findByPk(id);
    //console.log(videogame)
    if (!videogame) {
      return { error: "Videojuego no encontrado" };
    }

    console.log("Nuevo Precio (antes de la conversión):", newPrice);

    //Convertir newPrice a número antes de actualizar
    const parsedNewPrice = parseFloat(newPrice.price);
    console.log(parsedNewPrice + " este es del controller");
    if (isNaN(parsedNewPrice)) {
      return { error: "El nuevo precio no es un número válido" };
    }
    await videogame.update({ price: parsedNewPrice });
    return videogame;
  } catch (error) {
    console.error("Error al actualizar el precio:", error);
    return { error: "Error interno del servidor" };
  }
};

module.exports = gameUpdPrice;
