

let password = document.getElementById("password1");
let verifypassword = document.getElementById("password2");
let messenger = document.getElementById("message");


function compare(){
    if(password.value === verifypassword.value){
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

