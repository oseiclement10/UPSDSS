
const getStartPage =(req,res,next)=>{
    res.render('startpage');
}

const getLoginPage = (req,res,next)=>{
    res.render('loginpage');
}

module.exports = {
    getStartPage,
    getLoginPage
}