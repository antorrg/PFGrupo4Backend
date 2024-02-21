const { DataTypes } = require("sequelize");

module.exports = (database)=> {
    database.define("Favorite",{
        id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false}, // El identificador del JSON
        name: {type: DataTypes.STRING, unique: true, allowNull: false},
        gender:{type: DataTypes.ENUM("Female", "Male", "Genderless", "unknown"), defaultValue: "unknown", allowNull: false},
        status: {type: DataTypes.ENUM("Alive", "Dead", "unknown", "undefined"), defaultValue: "unknown", allowNull: false},
        //origin: {type: DataTypes.STRING, allowNull: false},
        species: {type: DataTypes.STRING, allowNull: false},
        image: {type: DataTypes.STRING, allowNull: false}
    },
    {
        timestamps: false, 
    });
}