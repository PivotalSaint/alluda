const Sequelize = require('sequelize');

require('dotenv').config();


//connects to our database using mysql credentials
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port:3350
});

