let Labeller = require('./Labeller');

 class Recommend{
    
    interests=[];
    strengths="";
    availablePrograms=[];
    recommendedPrograms=null;
    str=null;
    Labels=null;
    

    constructor(){
       
        this.Labels = new Labeller();
        this.recommendedPrograms = [];
    }
    
   loadInterests(interest){
       
        let mutatedInterest = interest.map(elem=>{
            if(elem=='agricandnaturalresources'){
                elem='agricultureandnaturalresources';
            }else if(elem=='artandbuilt'){
                elem='artandbuiltenvironment';
            }else if(elem=='humanitiesandsocialscience'){
                elem = 'humanitiesandsocialsciences';
            }
            return elem;
        })


        this.interests = mutatedInterest; 
   }
   loadStrengths(subjects){
        this.strengths = subjects;
   }
   loadAvailablePrograms(programs){
        this.availablePrograms = programs;
   }
   getDuplicates(small,large){
    let arr = [];
    
    for(let i=0; i<small.length;i++){
        for(let j=0; j<large.length; j++){
            if(small[i]==large[j]){
                arr.push(small[i]);
            break;
    }
    }
    }
    return arr;
    }


    recommend(){
       
        let labels = Object.keys(this.Labels);
        let len = this.interests.length;
       
        for(let i=0; i<len;i++){
            for(let j=0; j<labels.length;j++){
                if(this.interests[i]==labels[j]){
                    
                    let selectedLabel = this.Labels[labels[j]];
                    
                    let topics = Object.keys(selectedLabel);
                    let strens = this.strengths;

                    for(let k=0; k<strens.length;k++){
                        for(let l=0; l<topics.length; l++){
                            if(strens[k]==topics[l]){
                                
                                let raw = selectedLabel[topics[l]];
                                
                                console.log(this.interests[i]);
                                
                                let userPrograms = this.availablePrograms.filter(elem=>elem.title==this.interests[i]);
                        
                                let userProgramsData = Object.assign([],userPrograms[0]["content"]);
                               
                                userProgramsData = userProgramsData.map(elem=>elem.program_name);
                                this.recommendedPrograms.push(...this.getDuplicates(userProgramsData,raw));
                                
                            }
                        }
                    }
                   
                }
            }
        }
    }
                                                                                                                       
    

}

module.exports = Recommend;