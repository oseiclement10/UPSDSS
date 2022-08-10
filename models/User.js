const db = require("../configs/database");
class User {
    coursename = "";

    constructor(id,name){
        this.name = name;
        this.id = id;
        this.db = db;

        this.queries = {
            updateCourse :  `update users set shsprogram=? where id = ?`,
        }
    }
    
    loadCourse(coursename){
        this.coursename = coursename;
    }

    

}

module.exports = User;