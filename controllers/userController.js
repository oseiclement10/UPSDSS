const connection = require('../configs/database');
const userQuery = "Insert into users(username,email,password)values(?,?,?)";
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const passport = require('passport');
const User = require('../models/User');

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
               
                logInUser(req,res,next);
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
          let urlname = req.user.username||"";

          res.redirect(`/welcome?n=${urlname}`);
        }
      })
    }
  })(req,res,next);
}

const updateUserCourse = (req,res,next)=>{
    let username = req.user.username;
    let id = req.user.id;
    let shsprogram = req.body.program;
    let user = new User(id,username);
    
    user.loadCourse(shsprogram);
    user.db.query(user.queries.updateProgram,[shsprogram,id],(err,rows)=>{
      if(err){
        res.redirect('/welcome?e=error');
      }else{
         res.redirect(`/program_details?v=${user.coursename}`);
      }
    })
}

const insertUserScores = (req,res,next)=>{
    let username = req.user.username;
    let id = req.user.id;
    let user = new User(id,username);
    user.loadExamsScores(req.body);
    user.calculateCutOff(user.examsscores_array);
    user.loadInterestandWeakness();
    
    user.db.query(user.queries.updateAll,
      [user.examsscores,user.strengths,user.weakness,user.aggregate,id],(err,rows)=>{
        if(err){
          console.log(err);
          res.redirect('/welcome?e=error');
        }else{
          res.redirect(`/program_success?c=${user.aggregate}`);
        }

      })
  
  }

const updateUserInterestFields = (req,res,next)=>{
  let id=req.user.id;
  let username=req.user.username;
  let user = new User(id,username);
  user.loadInterests(Object.keys(req.body));
  user.db.query(user.queries.updateInterests,[user.interests,id],(err,rows)=>{
      if(err){
        console.log(err);
        res.redirect('/welcome?e=error');
      }else{
        res.redirect('/user_interest_adv');
      }
  })
 
}

const getCurrentUserGrades = (req,res,next) =>{
  let scores;
  scores = req.user?.examsscores;
  if(scores){
    res.json(scores);
  }else{
    res.json({});
  }
}

module.exports = { 
    signUpUser,
    logInUser,
    updateUserCourse,
    insertUserScores,
    updateUserInterestFields,
    getCurrentUserGrades
}
