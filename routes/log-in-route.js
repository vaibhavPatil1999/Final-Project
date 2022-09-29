const express = require('express')
const routes = express.Router()
const logInConstructor = require('../constructor/log-in-constructor')

routes.get('/log-in', logInConstructor.logInConstructor)

routes.post('/log-in' , logInConstructor.postLogInConstructor)

/*forgot password*/
routes.get('/forgot' , logInConstructor.forgot)

routes.post('/forgot-password' , logInConstructor.forgotPassword)


module.exports = routes