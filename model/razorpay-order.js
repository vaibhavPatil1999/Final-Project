const Sequelize = require('sequelize')
const sequelize = require('../util/database-connection')

const razorpayTable = sequelize.define("payment-table", {

    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    paymentId : {
        type: Sequelize.STRING,

    },
    orderId : {
        type: Sequelize.STRING,

    },

    status : {
        type: Sequelize.STRING,

    },

})

module.exports = razorpayTable