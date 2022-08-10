function ensureAuthenticated(req,res,next){
    if(!req.isAuthenticated()){
        res.redirect('/login?e=notAuthorized');
    }else{
        next();
    } 
}

module.exports = ensureAuthenticated;