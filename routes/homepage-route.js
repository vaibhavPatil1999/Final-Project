const express = require('express')
const routes = express.Router()
const homePageConstructor = require('../constructor/homepage-constructor')

routes.get('/home',homePageConstructor.getHomePage)

routes.post('/home/addexpense',homePageConstructor.postAddExpense)

routes.get('/home/getexpense', homePageConstructor.getExpense)

routes.delete('/home/getexpense/delete/:id' , homePageConstructor.deleteExpense)

module.exports = routes