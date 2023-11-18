const {infoVideoGame}=require('../../../Data/indexData');
const gamesPostController=require('../gamesPostController');


const vgBulk = async()=>{
for (let i = 0; i <infoVideoGame.length; i++) {
    const game = infoVideoGame[i];

    try {
        // Llamar a tu función post aquí, usando los datos del juego
        await gamesPostController(game.name, game.description, game.image, game.released, game.genres, game.platforms, game.price);

        console.log(`Juego posteado exitosamente: ${game.name}`);
    } catch (error) {
        console.error(`Error al postear el juego ${game.name}: ${error.message}`);
    }
}
}

module.exports= vgBulk;