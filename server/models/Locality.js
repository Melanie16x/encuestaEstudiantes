import { sequelize, DataTypes } from "../../database/db.js";

export const Locality = sequelize.define('Locality',{
    id_locality:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false,
    },
},{
    sequelize,
    paranoid:true,
    modelName:'Locality',
    tableName:'Locality',
});



