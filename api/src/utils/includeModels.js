
const includeModels = async (model, associations) => {
    return model.findAll({
        include: associations.map(association => ({
            model: association.model,
            attributes: ['name'],
            through: {
                attributes: []
            }
        })),
        distinct: true, // Agrega esta opción para eliminar duplicados
    });
};


module.exports= includeModels;