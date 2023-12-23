const Sequelize = require('sequelize');

const connection = new Sequelize('qaplatform', 'root', 'C@nurun1t', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;