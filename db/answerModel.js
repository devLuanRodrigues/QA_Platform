const Sequelize = require('sequelize');
const connection = require('./db');

const answerModel = connection.define('answer', {
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    questionId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

answerModel.sync({ force: false }).then(() => {
    console.log("Create table SUCCESS!");
});

module.exports = answerModel;