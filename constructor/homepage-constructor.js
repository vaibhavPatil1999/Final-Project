const path = require('path')

const expenseTable = require('../model/expense-details-model')
const razorpayTable = require('../model/razorpay-order')

const auth = require('../middleware/auth')

const razorpay = require('razorpay')
const { error } = require('console')
const signUpTable = require('../model/sign-up-model')
const sequelize = require('../util/database-connection')
const Sequelize = require('sequelize')


exports.getHomePage = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'homepage.html'))
}



exports.postAddExpense = async (req, res) => {
    try {
        const signUpId = req.user.id
        const { amount, description, category } = req.body
        const data = await expenseTable.create({ amount, description, category, signUpId })
        res.status(200).json({ data, suc: true })
    } catch (err) {
        res.status(401).json({ msg: 'something went wrong' })
    }

}

exports.issubscribed = async (req, res) => {
    signUpId = req.user.id
    const permission = await signUpTable.findAll({ where: { id: signUpId } })
    res.status(200).json({ permission: permission })
    //    console.log(">>>>><<<<<",permission)
}

exports.getExpense = async (req, res) => {
    try {
        const getExpense = await expenseTable.findAll({ where: { signUpId: req.user.id } })
        res.status(200).json({ data: getExpense })
    } catch (err) {
        res.status(401).json({ error: err })
    }
}

exports.deleteExpense = async (req, res) => {
    try {
        const ID = req.params.id
        await expenseTable.destroy({ where: { id: ID } })
        res.status(200).json({ message: "expense deleted" })

    } catch (err) {
        res.status(500).json({ err, message: "something went wrong" })
    }

}

/*subscription*/
exports.subscription = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'subscription.html'))
}



exports.membership = async (req, res) => {
    const signUpId = req.user.id

    const razorpayInstance = new razorpay({
        key_id: 'rzp_test_RAeqbfsw60sgs2',
        key_secret: 'AQJsB2cKYtEAx4gLk9KYT2tJ'
    })

    const amount = 100 * 100
    try {
        const razorpayResponse = await razorpayInstance.orders.create({ amount, currency: "INR" })
        const createRazorOrder = await razorpayTable.create({ orderId: razorpayResponse.id, status: "pending", signUpId })
        res.status(200).json({ createRazorOrder, key_id: razorpayInstance.key_id })

    } catch (err) {
        console.log(err);
        res.status(400).send('Unable to create order');

    }

}

exports.updatetransaction = async (req, res) => {
    const signUpId = req.user.id
    try {
        const { order_id, payment_id } = req.body

        razorpayTable.findOne({ where: { orderId: order_id } }).then((order) => {

            order.update({ paymentId: payment_id, status: "success" }).then(() => {

                req.user.update({ issubscribed: true })

                return res.status(202).json({ sucess: true, message: "transaction successful", activateFeaters: true });

            })
                .catch((err) => {
                    throw new Error(err);
                });
        })
            .catch((err) => {
                throw new Error(err);
            });



    } catch (err) {
        console.log(err);
        res.status(403).json({ err: err, message: "something  went wrong" });

    }

}


exports.leaderboard = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'leaderboard.html'))
}


exports.getLeaderboard = async (req, res) => {
    try {
        const totalAmount = await expenseTable.findAll({
            attributes: ["signUpId", [Sequelize.fn("sum", Sequelize.col("amount")), "total_amount"]],
            group: ["signUpId"],
            raw: true,


        })
        // console.log(totalAmount.sort((a, b) => b.total_amount - a.total_amount));

        for (i = 0; i < totalAmount.length; i++) {
            const user = await signUpTable.findAll({
                attributes: ["name"],
                where: { id: totalAmount[i].signUpId }
            })
            totalAmount[i] = { ...totalAmount[i], name: user[0].name };

        }

        res.status(200).json(totalAmount)
        //  console.log(">>>--", totalAmount)

    } catch (err) {
        console.log(err)
        res.status(401).json(err)
    }
}










