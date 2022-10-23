const Sequalize = require('sequalize');

require('dotenv').config();



//connects to our database using mysql credentials
const sequalize = new Sequalize('alluda_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port:3306
});

module.exports = sequalize;