const express = require('express')
const path = require('path')

/*   database routes   */
// const sequelize = require('./util/database-connection')
// const signUpTable = require('./model/sign-up-model')


/*   Routes   */
const signUpRouter = require('./routes/sign-up-route')


const app = express()


const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))



/*  middleware */
app.use(signUpRouter)


/* connect to DB */
// sequelize.sync(() => {

// })



app.listen(2000, () => {
    console.log('Tracker is running...')
})



