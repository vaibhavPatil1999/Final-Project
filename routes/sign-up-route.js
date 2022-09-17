const express = require('express')
const routes = express.Router()

const signUpConstructor = require('../constructor/sign-up-constructor')

routes.get('/sign-up',signUpConstructor.signUpConstructor)

routes.post('/sign-up',signUpConstructor.postSignUpConstructor)

module.exports = routes 