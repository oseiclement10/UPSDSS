const GetInterestId = require('../helpers/GetInterestId');
const programs_array = require('../helpers/programs');
const GetPrograms = require('../models/GetPrograms');
const Recommend = require('../helpers/Recommed');

let interest_fileds={
    healthandalliedsciences:"Health And Allied Sciences",
    engineering:"Engineering",
    artandbuilt:"Art and Built Environment",
    science:"Science",
    humanitiesandsocialscience:"Humanities and Social Sciences",
    agricandnaturalresources:"Agriculture and Natural Resources"
};
   
function bobble(arr){

    let len = arr.length;
    for(let i=0;i<len;i++){
            for(let j=i+1; j<len;j++){
                    if(arr[i].substring(arr[i].length-1) > arr[j].substring(arr[j].length-1)){
                            let temp = arr[i];
                            arr[i] = arr[j];
                            arr[j] = temp                               
                        }
                }
    }

    return arr;

}

function clean(string){
    let words = string.split(",");
    let newString = words.map(elem=>elem.substring(0,elem.length-2));
    return newString;
}


    function removeDuplicates(arr){
        return arr.filter((elem,index)=>arr.indexOf(elem)===index);
    }

function getProgramsOnInterests (interest_array,user,pageRenderer,rawinterests=[]){
    
    
    let aggregate = user.aggregate;
    let ProgramsFinder = new GetPrograms();
    let Recommender = new Recommend();

    Recommender.loadInterests(rawinterests);

    let examsscores = user.examsscores.split(",");
    let electives = examsscores.splice(4);
    let keyElectives = bobble(electives);
    keyElectives = keyElectives.map(elem=>elem.substring(0,elem.length-2)).splice(0,2);
    keyElectives = keyElectives.map(elem=>elem.toLowerCase());
    
   
    Recommender.loadStrengths(keyElectives);

    let len = interest_array.length;
    let data = [];
    
    
    for(let i=0; i<len; i++){
        let interest = interest_array[i];
        let InterestId = new GetInterestId(interest).interest_id;
        
        ProgramsFinder.db.query(ProgramsFinder.queries.getOnInterestId,[InterestId],(err,rows)=>{
            if(err){
                pageRenderer(err,null,null);
            }else{
                ProgramsFinder.collection.title=interest;
                               
               
                ProgramsFinder.collection.content = rows.map(elem=>{
                    let prog = {};
                    prog.program_name = elem.program_name;
                    prog.cutoff = elem.cutoff;
                    prog.id=elem.id;
                    return prog;
                });
               
                
                if(InterestId==1 && user.shsprogram !="General Science"){
                   ProgramsFinder.collection.content = ProgramsFinder.collection.content.filter(elem=>elem.program_name=="BSc Disability and Rehabilitation Studies"); 
                 }

                 if(InterestId==2 && user.shsprogram =="Business"){
                    ProgramsFinder.collection.content = ProgramsFinder.collection.content.filter(elem=>elem.program_name=="BSc Actuarial Science" || elem.program_name=="BSc Statistics"); 
                 }

                let capture = Object.assign({},ProgramsFinder.collection);
                data.push(capture);
                
                if(i==(len-1)){
                    let detailedData = deepCopyArrays(data,[]);
                    
                    detailedData = detailedData.map(ele=>{
                        ele.content = ele.content.filter(el=>(el.cutoff)>=aggregate)
                        return ele;
                    });

                    
                    let recommendData = deepCopyArrays(detailedData,[]);

                     recommendData = recommendData.map(elem=>{
                        elem.title = elem.title.toLowerCase().split(" ").join("");
                        return elem;
                     })
                    
                    Recommender.loadAvailablePrograms(recommendData);

                    Recommender.recommend();

                    recommendData = Recommender.recommendedPrograms;
                    recommendData = removeDuplicates(recommendData);
                  
                    pageRenderer(null,user,data,detailedData,recommendData);
                }

            }
        })

    }
   



}

function deepCopyArrays(source,target){
    let len = source.length;
    for(let i =0; i<len ; i++){
        target[i] = Object.assign({},source[i]);
    }
    return target;
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

const getGradesPage = (req,res,next) =>{
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
        res.render('grades',{
            electives:program_choice,
            user:user
        })
    }
   
}

const getScoresGraphPage = (req,res,next)=>{
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

const getProgramsPage = async (req,res,next)=>{
    
    let interests = [];
    let user = {};
    user.name = req.user.username;
    user.shsprogram = req.user.shsprogram;
    user.examsscores = req.user.examsscores;
    user.aggregate = (`${req.user.aggregate}`.length==2) ? req.user.aggregate : `0${req.user.aggregate}`;
    user.strengths = req.user.strengths;

    let keys = req.user.interests.split(",");
    
    keys.forEach(element => {
        interests.push(interest_fileds[element])
    });

    user.interests = interests;

    
    function render(err,user,data,detailedData){
        if(err){
            console.log(err);
        }else{
        res.render("programs",{
            data:user,
            programs:data,
            detail_programs:detailedData
        });
    }
    }

    getProgramsOnInterests(user.interests,user,render);

}


const getCutOffFilterdPage=(req,res,next)=>{
    let interests = [];
    let user = {};
    user.name = req.user.username;
    user.shsprogram = req.user.shsprogram;

    user.aggregate = (`${req.user.aggregate}`.length==2) ? req.user.aggregate : `0${req.user.aggregate}`;
    user.strengths = req.user.strengths;
    user.examsscores = req.user.examsscores;
    let keys = req.user.interests.split(",");
    
    keys.forEach(element => {
        interests.push(interest_fileds[element])
    });

    user.interests = interests;
    

    getProgramsOnInterests(user.interests,user,render);

    function render(err,user,data,filteredData){
        if(err){
            console.log(err);
        }else{
        res.render("cutofffilter",{
            data:user,
            detail_programs:filteredData,
        });
    }
    }
    

}

const getProgramDetails = (req,res,next)=>{
    let id = req.query.id || null;
    let Getter = new GetPrograms();
    if(id){
        Getter.db.query(Getter.queries.getOnId,id,(err,rows)=>{
            if(err){
                res.redirect('back')
            }else{
                let data = rows[0];
                data.jobs = (data.jobs)? data.jobs.split(","):[];
                res.render('program_info',{
                    program:data
                })
            }
        })
    }
}

const getProgramsOnStrengths = (req,res,next)=>{
    let interests = [];
    let user = {};
    user.name = req.user.username;
    user.shsprogram = req.user.shsprogram;
    user.examsscores = req.user.examsscores;
    user.aggregate = (`${req.user.aggregate}`.length==2) ? req.user.aggregate : `0${req.user.aggregate}`;
    user.strengths = req.user.strengths;

    let keys = req.user.interests.split(",");
    let interestsRaw = Object.assign([],keys);

    keys.forEach(element => {
        interests.push(interest_fileds[element])
    });

    user.interests = interests;
    
    function render(err,user,data,filteredData,recommendData){
        if(err){
            console.log(err);
        }else{
            
        res.render("strengths",{
            data:user,
            detail_programs:filteredData,
            programs:recommendData
        });
    }
    }

    getProgramsOnInterests(user.interests,user,render,interestsRaw);

    
}

module.exports = {
    start,
    getLoginPage,
    getWelcomePage,
    getSignupPage,
    getGradesPage,
    getInterestPage,
    getProgramsPage,
    getScoresGraphPage,
    logOut,
    getProgramDetails,
    getCutOffFilterdPage,
    getProgramsOnStrengths
}