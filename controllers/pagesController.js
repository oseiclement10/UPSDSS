const programs = require('../helpers/programs');

const start = (req,res,next) => {
    if(req.isAuthenticated()){
        res.render('welcomepage');
    }else{
        res.render('loginpage');
    }
}
const logOut = (req,res,next)=>{
    req.logOut(function(err){
        if(err){
            console.log(err);
            return next(err);
        }
        res.redirect('/');
    })
}

const getSignupPage = (req,res,next)=>{
        res.render('signup');
}

const getWelcomePage = (req,res,next)=>{
    if(req.query.n){
        res.render('welcomepage',{
            name:`${req.query.n}`
        })
    }else if(req.query.e=="error"){
        res.render('welcomepage',{
            error: "An error occured please try again later"
        })
    }else{
        res.render('welcomepage');
    };
}

const getLoginPage = (req,res,next)=>{
    if(req.query.e ==='error'){
        res.render('loginpage',{
            msg:"An error occured please try again ..."
        });
        
    }else if(req.query.e ==="incorrect_credentials"){
        res.render('loginpage',{
            msg:"Incorrect credentials"
        })
    }else if(req.query.e === "notAuthorized"){
        res.render('loginpage',{
            msg:"You have to login first"
        })
    }else{
        res.render('loginpage');
    }
}

const getProgramDetailPage = (req,res,next) =>{
    let program = req.query.v||null;
    let program_choice = programs[`${program}`] || null;
    if(!program){
        res.redirect('/welcome?e=error')
    }else if(!program_choice){
        res.redirect('/welcome?e=error');
    }else{
        res.render('programdetails',{
            electives:program_choice,
        })
    }
   
}
module.exports = {
    start,
    getLoginPage,
    getWelcomePage,
    getSignupPage,
    logOut,
    getProgramDetailPage
    
}