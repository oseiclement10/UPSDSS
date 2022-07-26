const express = require('express');
const {body} = require('express-validator');
const { signUpUser } = require('../controllers/userController');

const router = express.Router();

router.post("/signup",
body('username').trim().escape(),
body('email').isEmail().normalizeEmail(),
body('password').trim().escape()
,
signUpUser);


module.exports = router;
