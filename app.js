require('dotenv').config();
const express = require("express");
const app = express();
const PATH = require('path');
const mainRoute = require('./routes/mainRoutes');
const PORT = process.env.PORT || 5000;
const connection = require('./configs/database');

app.set('views','./views');
app.set('view engine','pug');


app.use(express.static(PATH.join(__dirname,"public")));


app.use('/',mainRoute);

connection.connect(function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("connected to database successfully");
})




app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log(`App running on port ${PORT}`);
    }
})
