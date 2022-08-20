const express = require('express');
const {body} = require('express-validator');
const { signUpUser,
    logInUser,
    updateUserCourse,
    insertUserScores,
    getCurrentUserGrades} = require('../controllers/userController');

const router = express.Router();

const ensureAuthenticated = require('../configs/ensureAuth');

router.get("/grades",getCurrentUserGrades);

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

router.post("/course",ensureAuthenticated,updateUserCourse);

router.post("/program_details",ensureAuthenticated,insertUserScores);


module.exports = router;
