const express = require('express');
const router = express.Router();
const ensureAuthenticated = require('../configs/ensureAuth');
const {start,
    getLoginPage,
    getWelcomePage,
    getSignupPage,
    logOut,
    getProgramDetailPage
} = require('../controllers/pagesController');



router.get('/start',start);
router.get('/login',getLoginPage);
router.get('/logout',logOut);
router.get('/signup',getSignupPage);
router.get('/welcome',ensureAuthenticated,getWelcomePage);
router.get('/program_details',ensureAuthenticated,getProgramDetailPage);

module.exports = router;