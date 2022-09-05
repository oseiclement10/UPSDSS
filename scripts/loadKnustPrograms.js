const loader = require('request-promise');
const $ = require('cheerio');
const dB = require('./dbConnector');
const regex = /^[0-9]+./; 
const courses_collegesUrl = "https://ghanadmission.com/knust-courses/";
const courses_cuttOffUrl = "https://admission20.com/knust-cut-off-points-2022-2022/";

const completeQuery = "Insert into knust_programs(program_name,cutoff,college_id) values ?";
const incompleteQuery = "Insert into knust_programs(program_name,cutoff) values ?";

function getCoursesAndCuttOff(url,recivedData,func){
    loader(url).
    then(
        function(html){
           
            $_loaded =$.load(html);
            const data = $_loaded('tr');
    
            let contents = [];
            let courses = [] ;
            data.each((i,el)=>{
                contents.push($_loaded(el).find('td').text());
            })
    
            contents.map((str,index)=>{
                str = str.replace(regex,"");
                str = str.replace(".","");
                str = str.trim();
                let courseName = str.slice(0,str.length-2);
                let course_cutoff = str.slice(str.length-2);
    
                let course = {
                    title:courseName,
                    cutoff:course_cutoff,
                };
    
                courses.push(course);
                
            })
    
           return courses; 
        }
    ).then(data => func(data,recivedData)).
    catch(
        function(err){
            console.log(err);
        }
    );
     
}

function getAll(url1,url2,func){
    loader(url1).
    then(function(html){
   
    const $loader = $.load(html);
    const data = $loader('h5');
    
    let programsContainer = [];
    
    data.each((index,el)=>{
        if(index<6){
           
            let college_title = $loader(el).text();
            let listing = $loader(el).next().children();

            listing.each((ind,el)=>{
                let program = {};
                
                let program_name = $loader(el).text();
                program_name = program_name.replace("(Parallel)","");
                program_name = program_name.replace(".","");
                program_name = program_name.trim();
                program.title = program_name;
                program.college = college_title;
                programsContainer.push(program);
            })
            
        }
    })
    return programsContainer;
}).then(data=>{
    return  getCoursesAndCuttOff(url2,data,combinator);
}).
catch(function(err){
    console.log(err);
})

}


function combinator(data1,data2){
    let len2= data2.length;
    let len1=data1.length;

    for(let i=0; i<len1;i++){
        for(let j=0; j<len2; j++){
            if(compare(data1[i].title,data2[j].title)){
                data1[i].college = data2[j].college
                break;
            }
        }
    }

    data1 =  replaceCollegesWithId(data1);

    return separate(data1);
    
}

function separate(data){
    let len = data.length;
    let completeData = [];
    let incompleteData = [];
   
    let programs = {} 

    for(let i=0;i<len;i++){
        if(data[i].college){
            completeData.push(data[i]);
        }else{
            incompleteData.push(data[i]);
        }
    }
   
    programs.complete = completeData.map(elem=>Object.values(elem));
    programs.incomplete = incompleteData.map(elem=>Object.values(elem));

    return saveToDb(programs);
}


function getCollegeId(college_name){
    let id=null;
    switch(college_name){
        case "College of Health Sciences":
            id = 1;
            return id;
        case "College of Science":
            id = 2;
            return id;
        case "College of Engineering":
            id =3;
            return id;
        case "College of Agriculture and Natural Resources":
            id =4;
            return id;
        case "College of Art and Built Environment":
            id = 5;
            return id;
        case "College of Humanities and Social Sciences":
            id = 6;
            return id;
        default :
            id = 0;
            return id;
    }
}

function replaceCollegesWithId(data){    
   data = data.map(elem=>{
        if(elem.college){
            elem.college = getCollegeId(elem.college);
        }
        return elem;
    })
    return data;
}

function saveToDb(data){
    let completeData =  data.complete;
    let incompleteData = data.incomplete;
    
    dB.query(completeQuery,[completeData],(err,rows)=>{
        if(err){
            console.log("error occured at inserting complete data")
            console.log(err);
            dB.end();
        }else{
            dB.query(incompleteQuery,[incompleteData],(err,rows)=>{
                if(err){
                    console.log("error occured at inserting incomplete data")
                    console.log(err);
                    dB.end();
                }else{
                    console.log("programs loaded into db successfully");
                    dB.end();
                }
            })
        }
    })

}


function compare(str1,str2){
    let st1 = str1.split(" ");
    let st2 = str2.split(" ");
    if (st2.includes(st1[1])){
        return true;
    }else{
        return false;
    }

}


getAll(courses_collegesUrl,courses_cuttOffUrl,combinator);

