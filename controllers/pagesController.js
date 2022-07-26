
const getStartPage =(req,res,next)=>{
    if(req.query.e ==='error'){
        res.render('startpage',{
            msg:"An error occured please try again ..."
        });
    }else{
        res.render('startpage');
    }
  
}

const getLoginPage = (req,res,next)=>{
    res.render('loginpage');
}

module.exports = {
    getStartPage,
    getLoginPage
}