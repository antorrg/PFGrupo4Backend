const {DataTypes}= require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Genre',{
        id:{
            type: DataTypes.INTEGER, 
            autoIncrement:true, 
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING, 
            allowNull: false
        },
        enable:{
            type: DataTypes.BOOLEAN, 
            defaultValue: true
        },
    },
        {timestamps: true}
    )
};