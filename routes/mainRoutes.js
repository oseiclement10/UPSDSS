const express = require('express');
const router = express.Router();
const {getStartPage} = require('../controllers/mainController');


router.get('/',getStartPage);


module.exports = router;