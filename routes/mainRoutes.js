const express = require('express');
const router = express.Router();
const ensureAuthenticated = require('../configs/ensureAuth');
const {start,
    getLoginPage,
    getWelcomePage,
    getSignupPage,
    logOut,
    getProgramDetailPage,
    getProgramSuccessPage
} = require('../controllers/pagesController');



router.get('/start',start);
router.get('/login',getLoginPage);
router.get('/logout',logOut);
router.get('/signup',getSignupPage);
router.get('/welcome',ensureAuthenticated,getWelcomePage);
router.get('/program_details',ensureAuthenticated,getProgramDetailPage);
router.get('/program_success',ensureAuthenticated,getProgramSuccessPage);

module.exports = router;