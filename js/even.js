
document.getElementById('btn-submit').addEventListener('click',function(){
 
    const emailField=document.getElementById('Email-user');
const email=emailField.value;


const myPassword=document.getElementById('user-password');
const password=myPassword.value;
 
if(email==="ah491606@gmail.com"&& password === 'anik12'){
    window.location.href='body.html';
}
else{
    alert('unvalid user')
}

})