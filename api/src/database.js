const {Sequelize}=require ('sequelize');
const CreateVideogame = require('./Models/videogame');
const CreateGenre = require('./Models/genre');
const CreatePlatform = require('./Models/platform');
const CreateUser= require('./Models/user');
const CreateRating=require('./Models/rating')
require ('dotenv').config();
const {DB_USER, DB_PASS, DB_HOST, DB_NAME}=process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`,
{logging: false,
native:false}
);

// const sequelize = new Sequelize(DB_DEPLOY, {
//     logging: false, // set to console.log to see the raw SQL queries
//     native: false, // lets Sequelize know we can use pg-native for ~30% more speed
//     dialectOptions: {
//       ssl: {
//         require: true,
//       }
//     }
//   });

CreateVideogame(sequelize);
CreateGenre(sequelize);
CreatePlatform(sequelize);
CreateUser(sequelize);
CreateRating(sequelize);

const {Videogame, Genre, Platform, User, Rating}= sequelize.models

Videogame.belongsToMany(Genre, {through: 'videogame_genre'})
Genre.belongsToMany(Videogame, {through: 'videogame_genre'})

Videogame.belongsToMany(Platform, {through: 'videogame_platform'})
Platform.belongsToMany(Videogame, {through: 'videogame_platform'})
User.hasOne(Rating);
Rating.belongsTo(User);

module.exports = {
    ...sequelize.models,
    sequelize
}
