import {sequelize, DataTypes} from '../../database/db.js';

export const Quiz = sequelize.define('Quiz',{
    id_quiz:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    locality_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    genre_id:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },

},{
    sequelize,
    paranoid:true,
    tableName:'Quiz',
    modelName:'Quiz',
});