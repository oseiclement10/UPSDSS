const db = require("../configs/database");

class User {
    coursename = "";
    examsscores = "";
    examscores_raw=[];
    strengths="";
    weakness="";
    cutoffpoint = null;

    constructor(id,name){
        this.name = name;
        this.id = id;
        this.db = db;

        this.queries = {
            updateProgram :  `update users set shsprogram=? where id = ?`,
            updateProgramScores : `update users set examsscores=? where id=?`, 
            updateStrength: `update users set strengths = ? where id=?`,
            updateWeakness:`update users set weakness=? where id = ?`
        }
            
    }
    
    loadCourse(coursename){
        this.coursename = coursename;
    }

    loadExamsScores(examscores){

         let scores;
         let scores_string = [];

        for(let key in examscores){

            let num_val = examscores[key].substring(1);
            scores = `${key}=${num_val}`;
            scores_string.push(scores);    
        }

        this.examsscores_array = scores_string;
        this.examsscores = scores_string.toString();
        
        
    }

    calculateCutOff(examscores){     
      function sort(arr){
        let temp;
	    let len= arr.length;
	    for(let i=0;i<len;i++){
	        for(let j=0;j<len-1-i; j++){
             if (arr[j].slice(arr[j].length-1) > arr[j+1].slice(arr[j+1].length-1)){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
	    }
        }
            return arr;
      }

      function sumUp(arr,len){
        let sum=0;
        for(let i=0;i<len;i++){
            sum += parseInt(arr[i].slice(arr[i].length-1));
        }
        return sum;
      }

        let coreSubjects = sort(this.examsscores_array.slice(0,4));
        let electiveSubjects = sort(this.examsscores_array.slice(4,this.examsscores_array.length));
        let cutoff = sumUp(coreSubjects,3) + sumUp(electiveSubjects,3);
        this.cutoffpoint = (`${cutoff}`.length ==2)? `${cutoff}`: `0${cutoff}` ;
    }

    loadInterestandWeakness(){
        function sort(arr){
            let temp;
            let len= arr.length;
            for(let i=0;i<len;i++){
                for(let j=0;j<len-1-i; j++){
                 if (arr[j].slice(arr[j].length-1) > arr[j+1].slice(arr[j+1].length-1)){
                    temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
            }
                return arr;
          }

        let strengths = sort(this.examsscores_array).slice(0,3);
        let weakness = sort(this.examsscores_array).slice(6,8);

        this.strengths =  strengths.toString();
        this.weakness  =  weakness.toString();
    }

    
    

}


module.exports = User;