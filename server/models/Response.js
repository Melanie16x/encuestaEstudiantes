import { sequelize, DataTypes } from "../../database/db.js";

export const Response = sequelize.define('Response',{
    id_Response:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },

    response:{
        type:DataTypes.STRING,
        allowNull:false,
    },

},{
    sequelize,
    paranoid:true,
    modelName:'Response',
    tableName:'Response'
});

