const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    //definir el modelo
    sequelize.define(
        "rating",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            comment: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            score: {
                type: DataTypes.FLOAT,
                validate: {
                    min : 0,
                    max: 5
                },
            },
            status: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        { timestamps: false }
    );
};