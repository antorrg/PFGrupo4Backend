const {Sequelize}=require ('sequelize');
const CreateVideogame = require('./Models/videogame');
const CreateGenre = require('./Models/genre');
const CreatePlatform = require('./Models/platform');
require ('dotenv').config();
const {DB_USER, DB_PASS, DB_HOST, DB_NAME}=process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`,
{logging: false,
native:false}
);

CreateVideogame(sequelize);
CreateGenre(sequelize);
CreatePlatform(sequelize);

const {Videogame, Genre, Platform}= sequelize.models

Videogame.belongsToMany(Genre, {through: 'videogame_genre'})
Genre.belongsToMany(Videogame, {through: 'videogame_genre'})

Videogame.belongsToMany(Platform, {through: 'videogame_platform'})
Platform.belongsToMany(Videogame, {through: 'videogame_platform'})

module.exports = {
    ...sequelize.models,
    sequelize
}
