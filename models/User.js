const db = require("../configs/database");
class User {
    coursename = "";
    examsscores = "";

    constructor(id,name){
        this.name = name;
        this.id = id;
        this.db = db;

        this.queries = {
            updateProgram :  `update users set shsprogram=? where id = ?`,
            updateProgramScores : `update users set examsscores=? where id=?`, 
        }
            
    }
    
    loadCourse(coursename){
        this.coursename = coursename;
    }

    loadExamsScores(examscores){
         let scores;
         let scores_string = [];

        for(let key in examscores){
            scores = `${key}=${examscores[key]}`;
            scores_string.push(scores);    
        }

        this.examsscores = scores_string.toString();
    }
    

}


module.exports = User;