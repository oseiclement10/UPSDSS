
const signUpUser = (req,res,next) =>{
    console.log(req.body);
    res.json({
        msg:"recieved",
    })
    return;
}


module.exports = {
    signUpUser
}
