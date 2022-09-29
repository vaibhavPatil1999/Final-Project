const path = require('path')
const bcrypt = require('bcrypt')
// const twd = require('')
const signUpTable = require('../model/sign-up-model')

exports.signUpConstructor = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'sign-up.html'))
}


/*    saving sign up data in database  */

exports.postSignUpConstructor = async (req, res, next) => {

    const { name, email, password } = req.body
    const encryptedPassword = await bcrypt.hash(password, 10)

    signUpTable.create({ name: name, email: email, password: encryptedPassword})
        .then((result) => {
            res.status(201).json({ result, success: true })
        }).catch((error)=>{
            res.json(error)
        })

}


