const express = require('express');
const router = express.Router();

const {start,
    getLoginPage,
    getWelcomePage,
    getSignupPage,
    logOut
} = require('../controllers/pagesController');

function ensureAuthenticated(req,res,next){
    if(!req.isAuthenticated()){
        res.redirect('/login?e=notAuthorized');
    }else{
        next();
    } 
}

router.get('/start',start);
router.get('/login',getLoginPage);
router.get('/logout',logOut);
router.get('/signup',getSignupPage);
router.get('/welcome',ensureAuthenticated,getWelcomePage);

module.exports = router;