const GetInterestId = require('../helpers/GetInterestId');
const programs_array = require('../helpers/programs');
const GetPrograms = require('../models/GetPrograms');

function clean(string){
    let words = string.split(",");
    let newString = words.map(elem=>elem.substring(0,elem.length-2));
    return newString;
}

const start = (req,res,next) => {
    if(req.isAuthenticated()){
        res.render('welcomepage');
    }else{
        res.render('loginpage');
    }
}
const logOut = (req,res,next)=>{
    req.logOut(function(err){
        if(err){
            console.log(err);
            return next(err);
        }
        res.redirect('/');
    })
}

const getSignupPage = (req,res,next)=>{
        res.render('signup');
}

const getWelcomePage = (req,res,next)=>{
    if(req.query.n){
        res.render('welcomepage',{
            name:`${req.query.n}`
        })
    }else if(req.query.e=="error"){
        res.render('welcomepage',{
            error: "An error occured please try again later"
        })
    }else{
        res.render('welcomepage');
    };
}

const getLoginPage = (req,res,next)=>{
    if(req.query.e ==='error'){
        res.render('loginpage',{
            msg:"An error occured please try again ..."
        });
        
    }else if(req.query.e ==="incorrect_credentials"){
        res.render('loginpage',{
            msg:"Incorrect credentials"
        })
    }else if(req.query.e === "notAuthorized"){
        res.render('loginpage',{
            msg:"You have to login first"
        })
    }else{
        res.render('loginpage');
    }
}

const getProgramDetailPage = (req,res,next) =>{
    let program = req.query.v||null;
    let program_choice = programs_array[`${program}`] || null;
    let user = {
        username:req.user.username,
        shsprogram:req.user.shsprogram
    }
    if(!program){
        res.redirect('/welcome?e=error')
    }else if(!program_choice){
        res.redirect('/welcome?e=error');
    }else{
        res.render('programdetails',{
            electives:program_choice,
            user:user
        })
    }
   
}

const getProgramSuccessPage = (req,res,next)=>{
    let cutoff = req.query.c;
    let strengths = clean (req.user.strengths);

    let weakness = req.user.weakness;
    let username = req.user.username;
    
    res.render('programsgraphic',{
        username:username,
        cutoff:cutoff,
        strength:strengths,
        weakness:weakness
    });
}

const getInterestPage = (req,res,next)=>{
    let shsprogram=req?.user.shsprogram;
    
    res.render("interestpage",{
        shsprogram:shsprogram,
    });
}

const getAdvInterestPage = (req,res,next)=>{

    let interests = [];
    let user = {};
    
    let interest_fileds={
        healthandalliedsciences:"Health And Allied Sciences",
        engineering:"Engineering",
        artandbuilt:"Art and Built Environment",
        science:"Science",
        humanitiesandsocialscience:"Humanities and Social Sciences",
        agricandnaturalresources:"Agriculture and Natural Resources"
    };
       
    user.name = req.user.username;
    user.shsprogram = req.user.shsprogram;

    user.aggregate = (`${req.user.aggregate}`.length==2) ? req.user.aggregate : `0${req.user.aggregate}`;
    user.strengths = req.user.strengths;

    let keys = req.user.interests.split(",");

    keys.forEach(element => {
        interests.push(interest_fileds[element])
    });

    user.interests = interests;
    

    async function getProgramsOnInterests (interest_array,user,pageRenderer){

            let ProgramsFinder = new GetPrograms();
            let len = interest_array.length;

           
            interest_array.forEach( (elemm,index)=>{
                
                let interestId = new GetInterestId(elemm);
                  ProgramsFinder.db.query(ProgramsFinder.queries.getOnInterestId,[interestId.interest_id],(err,rows)=>{
                    if(err){
                        pageRenderer(err,null,null);
                    }else{

                        ProgramsFinder.collection.title = elemm;
                        ProgramsFinder.collection.content = rows.map(elem=>{
                             let prog = {};
                             prog.program_name = elem.program_name;
                             prog.cutoff=elem.cutoff;
                             return prog;
                        });
                       
                        let capture = Object.assign({},ProgramsFinder.collection);
                        
                        ProgramsFinder.loadContainer(capture);
                        
                        if(index == (len-1)){
                            let data=ProgramsFinder.getContainer();
                            pageRenderer(null,user,data);
                        }

                    }

                })

            })




    }
     
    getProgramsOnInterests(user.interests,user,render);

    function render(err,user,data){
        if(err){
            console.log(err);
        }else{
            console.log(data);
        res.render("interest_adv",{
            data:user,
            programs:data,
        });
    }

    }
    



}

module.exports = {
    start,
    getLoginPage,
    getWelcomePage,
    getSignupPage,
    logOut,
    getProgramDetailPage,
    getProgramSuccessPage,
    getInterestPage,
    getAdvInterestPage
}