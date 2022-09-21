const path = require('path')
const expenseTable = require('../model/expense-details-model')


exports.getHomePage = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'homepage.html'))
}



exports.postAddExpense = async (req, res) => {
    try {
        const { amount, description, category } = req.body
        const data = await expenseTable.create({ amount, description, category })
        res.status(200).json({ data, suc: true })
    } catch (err) {
        res.status(401).json({ msg: 'something went wrong' })
    }

}


exports.getExpense = async (req, res) => {
    try {
    const getExpense = await expenseTable.findAll()
    res.status(200).json({ data: getExpense })
    }catch(err){
      res.status(401).json({error:err})
    }
}

exports.deleteExpense =async (req,res) =>{
        try{
            const ID = req.params.id
            await expenseTable.destroy({where:{id:ID}})
            res.status(200).json({message:"expense deleted"})
         
        }catch(err){
          res.status(500).json({err,message:"something went wrong"})
        }
   
}