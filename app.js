const express = require('express')
const path = require('path')
const cors = require('cors')



/*   database routes   */
const sequelize = require('./util/database-connection')
const signUpTable = require('./model/sign-up-model')
const expenseTable = require('./model/expense-details-model')
const razorpayTable = require('./model/razorpay-order')


/*   Routes   */
const signUpRouter = require('./routes/sign-up-route')
const logInRouter  = require('./routes/log-in-route')
const homePageRouter = require('./routes/homepage-route')


const app = express()


/*DB relations*/
signUpTable.hasMany(expenseTable)
expenseTable.belongsTo(signUpTable)
signUpTable.hasMany(razorpayTable)
razorpayTable.belongsTo(signUpTable)


const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors())

app.use(express.static(path.join(__dirname, 'public')))



/*  middleware */
app.use(signUpRouter)
app.use(logInRouter)
app.use(homePageRouter)



/* connect to DB */
sequelize.sync()
// sequelize.sync({force:true})



app.listen(5000, () => {
    console.log('Tracker is running...')
})



