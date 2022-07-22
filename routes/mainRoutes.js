const express = require('express');
const router = express.Router();
const {getStartPage,getLoginPage} = require('../controllers/mainController');


router.get('/start',getStartPage);
router.get('/login',getLoginPage);

module.exports = router;