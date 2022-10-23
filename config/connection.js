const Sequalize = require('sequalize');

require('dotenv').config();


//connects to our database using mysql credentials
const sequalize = new Sequalize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port:3350
});

module.exports = sequalize;