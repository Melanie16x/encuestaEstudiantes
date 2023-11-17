import { sequelize, DataTypes } from "../../database/db.js";

export const Question = sequelize.define('Question',{
    id_Question:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    question:{
        type:DataTypes.STRING,
        allowNull:false,
    },
 
},{
    sequelize,
    paranoid:true,
    modelName:'Question',
    tableName:'Questions'
});

