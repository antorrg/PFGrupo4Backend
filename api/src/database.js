const {Sequelize}=require ('sequelize');
//todo const XXXXX = require('./Models/xxxx'); aquí van declarados los modelos.
require ('dotenv').config();
const {DB_USER, DB_PASS, DB_HOST, DB_NAME}=process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`,
{logging: false,
native:false}
);

//todo XXXXX(sequelize)
//todo xxXXXx(sequelize)

//todo const {nombre de tabla}= sequelize.models

module.exports = {
    ...sequelize.models,
    sequelize
}