const { Videogame } = require("../../database");

const gameSetFalse = async(id)=>{
    try {
        //Verificar si el videojuego existe y si está en true
        const videogame = await Videogame.findByPk(id);
        if (videogame && videogame.enable) {
            // Actualizar el campo 'enable' a false (deshabilitar)
            await videogame.update({ enable: false });
        return { message: 'Juego deshabilitado exitosamente.' };
    } else if (videogame && !videogame.enable) {
        // Si ya está deshabilitado, devolver un mensaje indicando eso
        return { message: 'El juego ya está deshabilitado.' };
    } else {
        // Si el juego no existe, devolver un mensaje indicando eso
        return { message: 'Juego no encontrado.' };
    }
    } catch (error) {
            throw new Error('Error al deshabilitar el juego.');
        
    }


}

module.exports = gameSetFalse;