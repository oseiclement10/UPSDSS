const express = require('express');
const router = express.Router();
const ensureAuthenticated = require('../configs/ensureAuth');
const {
    start,
    getLoginPage,
    getWelcomePage,
    getSignupPage,
    getGradesPage,
    getInterestPage,
    getProgramsPage,
    getScoresGraphPage,
    logOut,
    getProgramDetails,
    getCutOffFilterdPage,
    getProgramsOnStrengths
} = require('../controllers/pagesController');



router.get('/start',start);
router.get('/login',getLoginPage);
router.get('/logout',logOut);
router.get('/signup',getSignupPage);
router.get('/welcome',ensureAuthenticated,getWelcomePage);
router.get('/program_details',ensureAuthenticated,getGradesPage);
router.get('/program_success',ensureAuthenticated,getScoresGraphPage);
router.get('/user_interests',ensureAuthenticated,getInterestPage);
router.get('/user_interest_adv',ensureAuthenticated,getProgramsPage);
router.get('/prog_details',ensureAuthenticated,getProgramDetails);
router.get('/programs_on_cutoff',ensureAuthenticated,getCutOffFilterdPage);
router.get('/view_programs',ensureAuthenticated,getProgramsOnStrengths);

module.exports = router;