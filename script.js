

function radio(){
    let radioBtnNone = document.querySelectorAll('input[type="radio"]');
   radioBtnNone.forEach((i)=>i.parentElement.classList.remove('radioStyle'))

   let radioBtn = document.querySelector('input[type="radio"]:checked');
   radioBtn.parentElement.classList.add('radioStyle');
}


let form = document.getElementById('form');
let success = document.getElementById('success');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let result = 0;
    fname()?result++:"";
    lname() ?result++:"";
    email() ?result++:"";
    qt() ?result++:"";
    text()?result++:"";
    check()?result++:"";

    if(result == 6){
        success.classList.add('success');
    }

});

let fnameValue = document.getElementById('fname'); 
let lnameValue = document.getElementById('lname');
function fname(){
    fnameValue.nextElementSibling.style = 'display:none';
    fnameValue.classList.remove('input-error');
    if(!fnameValue.value){
        fnameValue.nextElementSibling.style = 'display:block';
        fnameValue.classList.add('input-error');
        return false;
    }
    return true;
}
function lname(){
    lnameValue.nextElementSibling.style = 'display:none';
    lnameValue.classList.remove('input-error');
    if(!lnameValue.value){
        lnameValue.nextElementSibling.style = 'display:block';
        lnameValue.classList.add('input-error');
        return false;
    }
    return true;
}

let mail = document.getElementById('email');
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function email(){
    mail.nextElementSibling.nextElementSibling.style = 'display:none';
    mail.nextElementSibling.style = 'display:none';
    mail.classList.remove('input-error');
    if(mail.value.trim() == ""){
        mail.nextElementSibling.nextElementSibling.style = 'display:block';
        mail.classList.add('input-error');
        return false;
    }
    else if(!regex.test(mail.value)){
        mail.nextElementSibling.style = 'display:block';
        mail.classList.add('input-error');
        return false;
    }
    return true;
}

let general = document.getElementById('general-enquiry');
let support = document.getElementById('support');
let errorMessage = document.getElementById('qtError')
function qt(){
    errorMessage.style = "display:none";
    if(!(general.checked || support.checked)){
        errorMessage.style = "display:block";
        return false;
    }
    return true;
}

let textArea = document.getElementById('message');
function text(){
    textArea.nextElementSibling.style = "display:none";
    textArea.classList.remove('input-error');
    if(textArea.value.trim()  == ""){
        textArea.classList.add('input-error');
        textArea.nextElementSibling.style = "display:block";
        return false;
    }
    return true;
}

let checkBox = document.getElementById('check1');
let errorCheck = document.getElementById('check1-error');
function check(){
    errorCheck.style = "display:none";
    checkBox.classList.remove('input-error');
    if(!(checkBox.checked)){
        checkBox.classList.add('input-error');
        errorCheck.style = "display:block";
    }
    return true;
}