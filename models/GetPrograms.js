const db = require('../configs/database');

class GetPrograms {
    db=null;
    collection={};
    programs_container=[];
    constructor(){
        this.db=db;
        
        this.queries = {
            getOnInterestId:"Select program_name,cutoff from knust_programs where college_id =?"
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