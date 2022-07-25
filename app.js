require('dotenv').config();
const express = require("express");
const app = express();
const PATH = require('path');
const mainRoute = require('./routes/mainRoutes');
const userRoute = require('./routes/userRoutes');
const PORT = process.env.PORT || 5000;
const connection = require('./configs/database');

//Templating engine
app.set('views','./views');
app.set('view engine','pug');

app.use(express.json({}));
app.use(express.urlencoded({extended:false}));

// Routes
app.use(express.static(PATH.join(__dirname,"public")));


app.use('/',mainRoute);
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
