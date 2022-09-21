const Sequelize = require('sequelize')
const sequelize = require('../util/database-connection')

const expenseTable = sequelize.define('expense-details', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    category: {
        type:Sequelize.STRING,
        allowNull:false
    },

})

module.exports = expenseTable