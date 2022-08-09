let form = document.getElementById("courseform");
let boxes = document.getElementsByClassName("opt");

function checkSelected(){
    let count = 0;
    for(let i=0; i<boxes.length; i++){
        if(boxes[i].checked==true){
            count++;
        }
    }
    return count;
}
form.addEventListener("submit",e=>{
    if(checkSelected()==0){
        e.preventDefault();
        alert("You Must Select At least 1 Program");
    }else if(checkSelected()>1){
        e.preventDefault();
        alert("Select Only 1 program");
    }
})