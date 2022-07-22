const express = require("express");
const app = express();
const path = require('path');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname,"public")));
app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log(`App running on port ${PORT}`);
    }
})
