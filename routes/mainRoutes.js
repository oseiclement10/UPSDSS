const express = require('express');
const router = express.Router();
const {getStartPage,getLoginPage,getWelcomePage} = require('../controllers/pagesController');


router.get('/start',getStartPage);
router.get('/login',getLoginPage);
router.get('/welcome',getWelcomePage);

module.exports = router;