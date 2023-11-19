const { Videogame, Genre, Platform} = require("../database");
const { Op } = require("sequelize");

const getVideogames = async (page, size, filters, platformsFilters, genresFilters, req, res) => {

    page = +page;
    size = +size;

    try {
        const { count, rows } = await Videogame.findAndCountAll({
            where: filters,
            include: [
                {
                    model: Genre,
                    attributes: ["name"],
                    where: genresFilters,
                    /*where: {
                        //name: ["Actions", "Puzzle", "Indie"]
                        name: { [Op.in]: ["Actions", "Puzzle", "Indie"] }
                    },*/
                    through: {
                        attributes: []
                    }
                },
                {
                    model: Platform,
                    attributes: ["name"],
                    where: platformsFilters,
                    through: {
                        attributes: []
                    }
                }
            ],
            limit: size,
            offset: page*size,
            distinct:true
        });
        
        const auxTotalPages = Math.ceil(count / size);
        const auxPrevPage = (page - 1) >= 0 ? (page - 1) : -1;
        const auxNextPage = (page + 1) <= auxTotalPages ? (page + 1) : -1;
        const auxHasPrevPage = (page - 1) >= 0 ? true : false;
        const auxHasNextPage = (page + 1) < auxTotalPages ? true : false;
        
        return {
            videogames: rows,
            PaginationData: {
                totalItems: count,
                limit: size,
                totalPages: auxTotalPages,
                currentPage: page,
                hasPrevPage: auxHasPrevPage,
                hasNextPage: auxHasNextPage,
                prevPage: auxPrevPage,
                nextPage: auxNextPage
            }
        }
    } catch (error) {
        res.status(500).send("getVideogames not found");
    }
}

module.exports = getVideogames;