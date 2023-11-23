const {Sequelize}=require ('sequelize');
const CreateVideogame = require('./Models/videogame');
const CreateGenre = require('./Models/genre');
const CreatePlatform = require('./Models/platform');
require ('dotenv').config();
const {DB_USER, DB_PASS, DB_HOST, DB_NAME, DB_DEPLOY}=process.env;

const sequelize = new Sequelize(DB_DEPLOY, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  dialectOptions: {
    ssl: {
      require: true,
    }
  }
});

/*const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`,
{logging: false,
native:false}
);*/

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
