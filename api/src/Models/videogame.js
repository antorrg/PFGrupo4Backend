const {DataTypes, Sequelize} = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('Videogame', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        

    })
}