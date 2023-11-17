import {sequelize, DataTypes} from '../../database/db.js'

export const Genre = sequelize.define('Genre',{
    id_genre:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
},{
    sequelize,
    paranoid:true,
    modelName:'Genre',
    tableName:'Genre'
});

