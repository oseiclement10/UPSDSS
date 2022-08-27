const express = require('express');
const router = express.Router();
const ensureAuthenticated = require('../configs/ensureAuth');
const {start,
    getLoginPage,
    getWelcomePage,
    getSignupPage,
    logOut,
    getProgramDetailPage,
    getProgramSuccessPage,
    getInterestPage,
    getAdvInterestPage
} = require('../controllers/pagesController');



router.get('/start',start);
router.get('/login',getLoginPage);
router.get('/logout',logOut);
router.get('/signup',getSignupPage);
router.get('/welcome',ensureAuthenticated,getWelcomePage);
router.get('/program_details',ensureAuthenticated,getProgramDetailPage);
router.get('/program_success',ensureAuthenticated,getProgramSuccessPage);
router.get('/user_interests',ensureAuthenticated,getInterestPage);
router.get('/user_interest_adv',ensureAuthenticated,getAdvInterestPage);

module.exports = router;