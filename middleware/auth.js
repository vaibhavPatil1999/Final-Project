const jwt = require('jsonwebtoken')
const users = require('../model/sign-up-model')
const ammananna='VP1999';

exports.authenticate = (req,res,next) =>{
    try{
    const token = req.header('Authorization')
    console.log(token)
    const userID = jwt.verify(token,ammananna)
    // console.log("user id >>>>>>",userID)

    users.findByPk(userID).then((user)=>{
      // console.log("user  >>>>>>",user)
      req.user = user;

      next()
    })
}catch(err){
  console.log(err)
 return res.status(401).json({suc:false})
}

}

