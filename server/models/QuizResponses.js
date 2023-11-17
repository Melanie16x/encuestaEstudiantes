import { sequelize, DataTypes } from "../../database/db.js";

export const QuizResponses = sequelize.define('QuizResponses',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    quiz_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    response_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
},{
    sequelize,
    paranoid:true,
    modelName:'QuizResponses',
    tableName:'QuizResponses'
});