const bcrypt = require('bcrypt');
const connection = require('./database');
const LocalStrategy = require('passport-local').Strategy;

module.exports = function (passport){
    passport.serializeUser(function(user,done){
        done(null,user.id);
    });
    passport.deserializeUser(function(done,id){
        connection.query("SELECT * FROM USERS WHERE id = ?",[id],function(err,rows){
            done(err,rows);
        })
    })
    passport.use('local-login',new LocalStrategy({
        usernameField:"username",
        passwordField:"password",
        passReqToCallback:true,
    },
    function(req,username,password,done){
        connection.query("SELECT * FROM USERS WHERE USERNAME = ?",[username],(err,rows)=>{
            if(err){
                return done(err);
            }else if(!rows.length){
                return done(null,false,{message:"Incorrect credentials"});
            }else{
                bcrypt.compare(password,rows[0].password,(err,isMatch)=>{
                    if(err){
                       return done(err);
                    }else if(isMatch){
                       let user = rows[0];
                       return done(null,user);
                    }else{
                       return done(null,false,{message:"Incorrect credentials"});
                    }
                })
            }
        })
    }
    )
    )
}