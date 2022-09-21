const jwt = require('jsonwebtoken')
const users = require('../model/sign-up-model')
const ammananna='db43a197a80ce2990dab5eb45d7bf4b25f3d5d1824d856ed4a186930016e85980d1f94e4944005f0a752e895c8dc6d29bcfcd9d3b60740904c826b40612e1f05';

const authenticate = (req,res,next) =>{
    try{
    const token = req.header('Authorization')
    console.log(token)
    const userID = jwt.verify(token,ammananna)
    console.log("user id >>>>>>",userID)

    users.findByPk(userID).then((u)=>{
      
    })
}catch(err){
  console.log(err)
 return res.status(401).json({suc:false})
}

}

module.exports = authenticate