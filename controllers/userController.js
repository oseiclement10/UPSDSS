const connection = require('../configs/database');
const userQuery = "Insert into users(name,email,password)values(?,?,?)";
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');

const signUpUser = (req,res,next) =>{
  const errors = validationResult(req);

  if(!errors.isEmpty()){
    req.redirect('/users/signup');
  }else{
    bcrypt.genSalt(10,(err,salt)=>{
      if(err){
        console.log(err);
        return;
      }else{
        let password = req.body.password;
        bcrypt.hash(password,salt,(err,hash)=>{
          if(err){
            console.log(err);
          }else{
            password=hash;
            connection.query(userQuery,[req.body.username,password,email],(err,rows)=>{
              if(err){
                console.log(err);
              }else{
                console.log("user signed up successfully");
                res.json({
                  msg:"user signed up successfully",
                })
              }
            })
          }
        })
      }
    })
  }  
}

module.exports = {
    signUpUser
}
