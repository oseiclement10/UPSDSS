const express = require("express");
const app = express();
const PATH = require('path');
require('dotenv').config();
const mainRoute = require('./routes/mainRoutes');
const PORT = process.env.PORT || 5000;

app.set('views','./views');
app.set('view engine','pug');


app.use(express.static(PATH.join(__dirname,"public")));


app.use('/start',mainRoute);


app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log(`App running on port ${PORT}`);
    }
})
