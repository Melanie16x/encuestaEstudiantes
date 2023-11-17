import {Sequelize, Model, DataTypes} from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host:process.env.DB_HOST,
        dialect:process.env.DB_DIALECT || 'mysql',
        port:process.env.DB_PORT,
    },
);

export  {sequelize, Model, DataTypes}