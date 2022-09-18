require('dotenv').config();
const express = require("express");
const app = express();
const PATH = require('path');
const pagesRoute = require('./routes/pagesRoutes');
const userRoute = require('./routes/userRoutes');
const PORT = process.env.PORT || 5000;
const connection = require('./configs/database');
const passport = require('passport');
const session = require('express-session');

//authentication middlewares

require('./configs/passport')(passport);

app.use(session({
    secret:"somecookie",
    resave:true,
    saveUninitialized:true,
}));


app.use(passport.initialize());
app.use(passport.session());


//Templating engine
app.set('views','./views');
app.set('view engine','pug');

app.use(express.json({}));
app.use(express.urlencoded({extended:false}));

// Routes
app.use(express.static(PATH.join(__dirname,"public")));
app.use('/',pagesRoute);
app.use('/users',userRoute);

//database connection
connection.connect(function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("connected to database successfully");
})



//server
app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log(`App running on port ${PORT}`);
    }
})
