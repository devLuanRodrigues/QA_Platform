const Sequelize = require('sequelize');

const connection = new Sequelize('qaplatform', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;