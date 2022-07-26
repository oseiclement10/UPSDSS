const express = require('express');
const {body} = require('express-validator');
const { signUpUser,logInUser } = require('../controllers/userController');

const router = express.Router();

router.post("/signup",
body('username').trim().escape(),
body('email').isEmail().normalizeEmail(),
body('password').trim().escape()
,
signUpUser);

router.post("/login",
body('email').isEmail().normalizeEmail().escape(),
body('password').escape(),
logInUser
)


module.exports = router;
