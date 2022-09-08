class GetProgramsId{
    interest_colleges = new Map();
    interest_id = null;
    query="";

    constructor(interest){
        this.interest_colleges.set('Health And Allied Sciences',1);
        this.interest_colleges.set('Science',2);
        this.interest_colleges.set('Engineering',3);
        this.interest_colleges.set('Agriculture and Natural Resources',4);
        this.interest_colleges.set('Art and Built Environment',5);
        this.interest_colleges.set('Humanities and Social Sciences',6);
        this.interest_id = this.interest_colleges.get(interest);
    }
}

module.exports = GetProgramsId;