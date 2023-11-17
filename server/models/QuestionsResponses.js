import { sequelize, DataTypes } from "../../database/db.js";

export const QuestionsResponses = sequelize.define('QuestionsResponses',{
    id_questions_responses:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    response_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    question_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
},
{
    sequelize,
    paranoid:true,
    modelName:'QuestionsResponses',
    tableName:'QuestionsResponses'
});