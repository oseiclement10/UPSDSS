const db = require('../configs/database');

class GetPrograms {
    db=null;
    collection={};
    programs_container=[];
    constructor(){
        this.db=db;
        
        this.queries = {
            getOnInterestId:"Select * from knust_programs where college_id =?",
            
            getOnId: "Select * from knust_programs where id=?"
        }

        this.collection.title="";
        this.collection.content=[];
        
    }

    
    loadContainer(data){      
       this.programs_container.push(data)
    }

    getContainer(){
        return this.programs_container;
    }

    
}

module.exports = GetPrograms;