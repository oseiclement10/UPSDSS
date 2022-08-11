let program_offered_form = document.getElementById("courseform")||null;
let program_offered = document.getElementsByClassName("opt");
let electives = document.getElementsByClassName("opt2");
let error_message = document.getElementById("error_msg")||null;
let elective_subjects_form = document.getElementById("electiveform");
let elective_subjects_form_container = document.getElementById("scores_cont");

let coresubjects = ['English Lanaguage','Core Mathematics','Integrated Science','Social Studies'];
let electivessubjects=[];


function checkSelected(boxes){
    let count = 0;
    for(let i=0; i<boxes.length; i++){
        if(boxes[i].checked==true){
            count++;
        }
    }
    return count;
}



function createForm(data){
 let scores_form = document.getElementById("scores_form");
 let input_label_container = document.createElement('div');
 input_label_container.classList.add('opt');
 let input = document.createElement('input');
 input.max=100;
 input.min=0;
 input.type="number";
 input.name = data;
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
}

if(program_offered_form){
    program_offered_form.addEventListener('submit',(e)=>{
   
        if(checkSelected(program_offered)==0){
            e.preventDefault();
            alert("You Must Select At least 1 Program");
        }else if(checkSelected(program_offered)>1){
            e.preventDefault();
            alert("Select Only 1 program");
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

