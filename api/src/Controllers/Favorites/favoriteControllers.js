const {Favorite, User}= require('../../database')

const addFav = async (userId, id, name, gender,status, species, image )=>{
   
    const user = await User.findByPk(userId);
    try {
        const existingFav = await Favorite.findByPk(id);
        if(existingFav){
            const userHasFavorite = await user.hasFavorite(existingFav);

            if (userHasFavorite) {
              throw new Error('El usuario ya tiene favorito' );
            }
            try {
                await user.addFavorite(existingFav);
                const fav=existingFav;
                return fav;
            } catch (error) {
                throw new Error('Error al asignar Favorito');
            }
        }else{
            try {
                const newFav = await Favorite.create({
                    id,
                    name,
                    gender,
                    status,
                    species,
                    image
                })
                await user.addFavorite(newFav);
                const fav = newFav;
                console.log(fav)
                return fav;
            } catch (error) {
                throw new Error('Error al crear Favorito');
            }
        }
    } catch (error) {
        throw error; 
    }
};
const getFav = async (userId)=>{
    try {
        const user = await User.findByPk(userId, {
            include: [
                {
                    model: Favorite,
                    attributes: ["id", "name", "gender", "status", "species", "image"],
                    through: { attributes: [] },
                },
            ],
        });

        if (!user) {
           throw new Error('Usuario no encontrado.');
        }

        const favorites = user.Favorites; // Aquí asumimos que el alias es "Favorites"

        return favorites;
    } catch (error) {
        console.error(error);
        console.log('algo paso en el controller')
       throw error;
    }
};
const deleteFav = async (id, userPP)=>{
    console.log(id + ' favorito')
    console.log(userPP + ' usuario')
   
    try {
        const user = await User.findByPk(id);
        if (!user) {throw new Error('User not found.');}

        const favorite = await Favorite.findByPk(userPP);
        if (!favorite) {throw new Error('Favorite not found.');}

        await user.removeFavorite(favorite);
        return id;
        

    } catch (error) {
        throw error;
    }
};

module.exports = {
    addFav, 
    getFav, 
    deleteFav
};