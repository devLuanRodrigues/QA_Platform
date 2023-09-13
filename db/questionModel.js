const Sequelize = require('sequelize');
const connection = require('./db');

const questionModel = connection.define('question', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

questionModel.sync({ force: false }).then(() => {
    console.log("Create table SUCCESS!");
});

module.exports = questionModel;