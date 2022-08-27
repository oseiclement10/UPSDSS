let program_offered_form = document.getElementById("courseform")||null;
let program_offered = document.getElementsByClassName("opt");
let electives = document.getElementsByClassName("opt2");
let error_message = document.getElementById("error_msg")||null;
let elective_subjects_form = document.getElementById("electiveform");
let elective_subjects_form_container = document.getElementById("scores_cont");
let elective_scores = document.getElementById("scores_form");
let shsprogram = document.getElementById("shsprogram");

let interest_form = document.getElementById("interest_form");
let interest_vals = document.getElementsByClassName("int");

let coresubjects = ['English Lanaguage','Core Mathematics','Integrated Science','Social Studies'];
let electivessubjects=[];
let scores_form = document.getElementById("scores_form");
let submit_container = document.createElement('div');
let submit = document.createElement('input');
submit_container.classList.add('submitcont')
submit.type="submit";
submit.value = "continue";
submit.classList.add("next");
submit_container.appendChild(submit);

function checkSelected(boxes){
    let count = 0;
    for(let i=0; i<boxes.length; i++){
        if(boxes[i].checked==true){
            count++;
        }
    }
    return count;
}

function validateElectiveInput(){
    let valid = ["A1","B2","B3","C4","C5","C6","D7","E8","F9"];
    let inputs = document.getElementsByClassName('escores');
    for(let i =0; i < inputs.length; i++){
        if(!(valid.includes((inputs[i].value).toUpperCase()))){
            alert("invalid grade entered");
            inputs[i].focus();
           
            return false;
            break;
        }
    }
    return true;
}

function createForm(data){
 let input_label_container = document.createElement('div');
 input_label_container.classList.add('opt');
 let input = document.createElement('input');
 input.max=100;
 input.min=0;
 input.required=true;
 input.type="text";
 input.maxLength = 2;
 input.name = data;
 input.classList.add('escores');
 let label = document.createElement('label');
 input_label_container.appendChild(label);
 label.innerText = data;
 input_label_container.appendChild(input);  
 scores_form.appendChild(input_label_container);
}

function getDataFromHtml(htmlcollection){
    let data = [];
    for(i=0;i<htmlcollection.length;i++){
        if(htmlcollection[i].checked==true){
            data.push(htmlcollection[i].value)
        }
    }
    return data;
}

function builder(data){
    for(let i=0;i<data.length;i++){
        createForm(data[i]);
    }
 scores_form.appendChild(submit_container);
}

function inform(info){
    alert(info);
    return;
}

function decideInterest(shsprogram,interest){

    switch(shsprogram){
        case "General Sciene":
             return true;
        case "Business":
             if(interest=="Health and Allied Sciences"){
                inform(`Programs in ${interest} requires credit passes in electives that are not offered by students who offered ${shsprogram} in senior high school, hence you cannot select this field`);
                return false;
             }else if(interest=="Engineering"){
                inform(`Programs in ${interest} requires credit passes in electives that are not offered by students who offered ${shsprogram} in senior high school, hence you cannot select this field`);
                return false;
             }else if(interest=="Art and Built Environment"){
                inform(`Programs in ${interest} requires credit passes in electives that are not offered by students who offered ${shsprogram} in senior high school, hence you cannot select this field`);
                return false;
             }else if(interest=="Science"){
                return true;
             }else if(interest=="Humanities and Social Science"){
                return true;
             }else if(interest=="Agriculture and Natural Resources"){
                return true;
             }          
        case "General Arts":
             if(interest=="Health and Allied Sciences"){
               return true;
             }else if(interest=="Engineering"){
                inform(`Programs in ${interest} requires credit passes in electives that are not offered by students who offered ${shsprogram} in senior high school, hence you cannot select this field`);
                return false;
             }else if(interest=="Art and Built Environment"){
                return true;
             }else if(interest=="Science"){
                return true;
             }else if(interest=="Humanities and Social Science"){
                return true;
             }else if(interest=="Agriculture and Natural Resources"){
                return true;
             }          
        case "Home Economics":
            if(interest=="Health and Allied Sciences"){
                return true;
             }else if(interest=="Engineering"){
                inform(`Programs in ${interest} requires credit passes in electives that are not offered by students who offered ${shsprogram} in senior high school, hence you cannot select this field`);
                return false;
             }else if(interest=="Art and Built Environment"){
                inform(`Programs in ${interest} requires credit passes in electives that are not offered by students who offered ${shsprogram} in senior high school, hence you cannot select this field`);
                return false;
             }else if(interest=="Science"){
                return true;
             }else if(interest=="Humanities and Social Science"){
                return true;
             }else if(interest=="Agriculture and Natural Resources"){
                inform(`Programs in ${interest} requires credit passes in electives that are not offered by students who offered ${shsprogram} in senior high school, hence you cannot select this field`);
                return false;
             }          
        case "Agriculture":
            if(interest=="Health and Allied Sciences"){
                inform(`Programs in ${interest} requires credit passes in electives that are not offered by students who offered ${shsprogram} in senior high school, hence you cannot select this field`);
                return false;
             }else if(interest=="Engineering"){
                inform(`Programs in ${interest} requires credit passes in electives that are not offered by students who offered ${shsprogram} in senior high school, hence you cannot select this field`);
                return false;
             }else if(interest=="Art and Built Environment"){
                inform(`Programs in ${interest} requires credit passes in electives that are not offered by students who offered ${shsprogram} in senior high school, hence you cannot select this field`);
                return false;
             }else if(interest=="Science"){
                inform(`Programs in ${interest} requires credit passes in electives that are not offered by students who offered ${shsprogram} in senior high school, hence you cannot select this field`);
                return false;
             }else if(interest=="Humanities and Social Science"){
                return true;
             }else if(interest=="Agriculture and Natural Resources"){
                return true;
             }          
        case "Technical":
            if(interest=="Health and Allied Sciences"){
                inform(`Programs in ${interest} requires credit passes in electives that are not offered by students who offered ${shsprogram} in senior high school, hence you cannot select this field`);
                return false;
             }else if(interest=="Engineering"){
                return true;
             }else if(interest=="Art and Built Environment"){
                return true;
             }else if(interest=="Science"){
                return true;
             }else if(interest=="Humanities and Social Science"){
                return true;
             }else if(interest=="Agriculture and Natural Resources"){
                return true;
             }          
        case "Visual Arts":   
        if(interest=="Health and Allied Sciences"){
            inform(`Programs in ${interest} requires credit passes in electives that are not offered by students who offered ${shsprogram} in senior high school, hence you cannot select this field`);
            return false;
         }else if(interest=="Engineering"){
            inform(`Programs in ${interest} requires credit passes in electives that are not offered by students who offered ${shsprogram} in senior high school, hence you cannot select this field`);
            return false;
         }else if(interest=="Art and Built Environment"){
            inform(`Programs in ${interest} requires credit passes in electives that are not offered by students who offered ${shsprogram} in senior high school, hence you cannot select this field`);
            return false;
         }else if(interest=="Science"){
            inform(`Programs in ${interest} requires credit passes in electives that are not offered by students who offered ${shsprogram} in senior high school, hence you cannot select this field`);
            return false;
         }else if(interest=="Humanities and Social Science"){
            return true;
         }else if(interest=="Agriculture and Natural Resources"){
            return true;
         }          

    }

}



if(program_offered_form){
    program_offered_form.addEventListener('submit',(e)=>{
   
        if(checkSelected(program_offered)==0){
            e.preventDefault();
            alert("You Must Select At least 1 Program");
        }
    }
    )
}


if(elective_subjects_form){
    elective_subjects_form.addEventListener('submit',e=>{
    
        if(!(checkSelected(electives)==4)){
            e.preventDefault();
            alert('Electives subjects selected must be 4');
          
        }else{
            e.preventDefault();
            builder([...coresubjects,...getDataFromHtml(electives)]);
            elective_subjects_form_container.classList.add('show');
            document.location.href="#scores_cont";

        }
    })    
}

if(scores_form){
    scores_form.addEventListener("submit",(e)=>{
        if(!validateElectiveInput()){
            e.preventDefault();
        }
    })
    
}

if(interest_form){
    interest_form.addEventListener("submit",(e)=>{
        if(checkSelected(interest_vals)==0){
            alert("select at least 1 field that interest you");
            e.preventDefault();
        }else if(checkSelected(interest_vals)>3){
            alert("The maximum number of fields you can select is 3 you have selected "+ checkSelected(interest_vals));
            e.preventDefault();
        }
    })
}

if(interest_form){
    let len = interest_vals.length;
    for(let i=0;i<len;i++){
        interest_vals[i].addEventListener("change",e=>{
            if(e.target.checked){
                e.target.checked = decideInterest(shsprogram.innerText,e.target.parentElement.children[0].innerText); 
            }
        })
    }
}

