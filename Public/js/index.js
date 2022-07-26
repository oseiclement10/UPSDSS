
let password = document.getElementById("password1");
let verifypassword = document.getElementById("password2");
let messenger = document.getElementById("message");

function comparePass(){
    if( password.value === verifypassword.value){
        return true;
    } return false;
}

function compare(){
    if(comparePass()){
        messenger.classList.remove('wrong');
        messenger.innerHTML = "&#9745;";
        messenger.classList.add('correct');

        return true;
    }else{
        messenger.innerHTML="passwords do not match";
        messenger.classList.remove('correct');
        messenger.classList.add('wrong');
        return false;
    }
}


function validate(e){
    console.log(e);
    if(!compare){
        e.preventDefault();
        alert("passwords do not match");
    }
    console.log("passwords do match");
}

const form = document.getElementById("signup");

form.addEventListener('submit',(e)=>{
    if(!comparePass()){
        e.preventDefault();
        alert("passwords do not match !!!");
    }
    
})
