const path = require('path')
//const signUpTable = require('../model/sign-up-model')

exports.signUpConstructor = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'sign-up.html'))
}


/*    saving sign up data in database  */

exports.postSignUpConstructor =  (req, res, next) => {
    // try {

    //     const { name, email, password } = req.body
    //     const signUpData = await signUpTable.create({ name: name, email: email, password: password })
    //     res.status(201).json({ data: signUpData })

    // } catch (err) {
    //     res.status(500).json({ error: err })
    // }
    console.log(req.body)
}