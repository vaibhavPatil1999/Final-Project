const path = require('path')
const signUpTable = require('../model/sign-up-model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const ammananna='db43a197a80ce2990dab5eb45d7bf4b25f3d5d1824d856ed4a186930016e85980d1f94e4944005f0a752e895c8dc6d29bcfcd9d3b60740904c826b40612e1f05';



exports.logInConstructor = (req,res) => {
    res.sendFile(path.join(__dirname,'../','views','log-in.html'))
}



exports.postLogInConstructor =  async (req,res) => {

     const {email , password} = req.body
     
     const user = await signUpTable.findAll({where:{email:email}})
   
    if(user.length > 0){

        const DBId = user[0].id 
        const DBName = user[0].name 
        const DBEmail = user[0].email
        const DBPassword = user[0].password

       
       /* bcrypt.compare returns the boolean value */
       const emailPasswordMatching = await bcrypt.compare(password,DBPassword)
          
       if(emailPasswordMatching){
         const token = jwt.sign(DBId,ammananna) 
         res.status(200).json({ message: "login successful", token: token});
        }
        else
        {
            res.status(401).json({ message: "password is incorrect" });

        }


    }else{
        res.status(404).json({ message: "user not found" });

    }
    
    
}