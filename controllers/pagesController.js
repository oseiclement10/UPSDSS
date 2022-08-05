
const getStartPage =(req,res,next)=>{
    if(req.query.e ==='error'){
        res.render('signup',{
            msg:"An error occured please try again ..."
        });
    }else{
        res.render('signup');
    }
  
}
const getWelcomePage = (req,res,next)=>{
    res.render('welcomepage');
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
    }else{
        res.render('loginpage');
    }
}

module.exports = {
    getStartPage,
    getLoginPage,
    getWelcomePage
}