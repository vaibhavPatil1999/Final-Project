const express = require('express')
const path = require('path')

/*   database routes   */
const sequelize = require('./util/database-connection')
const signUpTable = require('./model/sign-up-model')


/*   Routes   */
const signUpRouter = require('./routes/sign-up-route')
const logInRouter  = require('./routes/log-in-route')


const app = express()


const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))



/*  middleware */
app.use(signUpRouter)
app.use(logInRouter)


/* connect to DB */
sequelize.sync({})
//sequelize.sync({force:true})




app.listen(5000, () => {
    console.log('Tracker is running...')
})



