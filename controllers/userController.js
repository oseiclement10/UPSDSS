const connection = require('../configs/database');
const userQuery = "Insert into users(username,email,password)values(?,?,?)";
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const passport = require('passport');

const signUpUser = (req,res,next) =>{
  const errors = validationResult(req);

  if(!errors.isEmpty()){
    res.redirect('/users/signup');
  }else{
    bcrypt.genSalt(10,(err,salt)=>{
      if(err){
        console.log("error occured at salt gen" + err);
        res.redirect('/start?e=error');
      }else{
        let password = req.body.password;
        bcrypt.hash(password,salt,(err,hash)=>{
          if(err){
            console.log("error occured at hashing " + err);
            res.redirect('/start?e=error');
          }else{
            password=hash;
            connection.query(userQuery,[req.body.username,req.body.email,password],(err,rows)=>{
              if(err){
                console.log("error occured at salt querying" + err);
                res.redirect('/start?e=error');
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

const logInUser = (req,res,next)=>{
  passport.authenticate('local-login',(err,user,info)=>{
    if(err){
      res.redirect('/login?e=error');
    }else if(!user){
      res.redirect('/login?e=incorrect_credentials');
    }else{
      req.logIn(user,err=>{
        if(err){
          console.log(err);
          res.redirect('/login?e=error');
        }else{
          res.redirect('/welcome');
        }
      })
    }
  })(req,res,next);
}
module.exports = {
    signUpUser,
    logInUser
}
