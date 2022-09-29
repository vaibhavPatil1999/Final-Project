const express = require('express')
const routes = express.Router()
const homePageConstructor = require('../constructor/homepage-constructor')
const auth = require('../middleware/auth')

routes.get('/home',homePageConstructor.getHomePage)

routes.post('/home/addexpense',auth.authenticate,homePageConstructor.postAddExpense)

routes.get('/home/getexpense',auth.authenticate, homePageConstructor.getExpense)

routes.delete('/home/getexpense/delete/:id' , homePageConstructor.deleteExpense)



/*subscription */
routes.get('/home/subscription',homePageConstructor.subscription)

routes.get('/home/subscription/membership',auth.authenticate , homePageConstructor.membership)

routes.post('/home/subscription/updatetransaction', auth.authenticate , homePageConstructor.updatetransaction)

routes.get('/home/issubscribed',auth.authenticate,homePageConstructor.issubscribed)


/*leaderboard*/
 routes.get('/home/leaderboard',homePageConstructor.leaderboard)
 routes.get('/home/getleaderboard',auth.authenticate,homePageConstructor.getLeaderboard)






module.exports = routes