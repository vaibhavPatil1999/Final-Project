const Sequelize = require('sequelize')

const sequelize = new Sequelize("full-stack-expense-tracker", "root", "MYSQL100", {

    dialect: "mysql",
    host: "localhost"

})


module.exports = sequelize 