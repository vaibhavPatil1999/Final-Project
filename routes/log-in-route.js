const express = require('express')
const routes = express.Router()
const logInConstructor = require('../constructor/log-in-constructor')

routes.get('/log-in', logInConstructor.logInConstructor)

routes.post('/log-in' , logInConstructor.postLogInConstructor)


module.exports = routes