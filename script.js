const createAccount=document.querySelector(".create");
const Password=document.querySelector("#password");
const confirmPassword=document.querySelector("#conf_password");

const text=document.querySelector(".text");




const login=document.querySelector("#login1");
login.addEventListener("click",()=>{
    document.location="login.html";
});

const logbtn=document.querySelector("#log");
logbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    document.location="admin.html";
});

const logout=document.querySelector(".lg");
logout.addEventListener("click",()=>{
    document.location="index.html";
});


createAccount.addEventListener("click",()=>{

if(password.value===confirmPassword.value){
    text.textContent=" Password Matched!";
        text.style.color="green";
          document.location="admin.html";
}
else if(confirmPassword.value===" "){
text.textContent=" Confirm your password ";
text.style.color="Red";
}
else if(password.value===""){
    text.textContent=" Enter a password!!";
    text.style.color="Red";
}else if(Password.value!==confirmPassword.value && confirmPassword){
    text.textContent="Passwords are not matching";
    text.style.color="Red";
}

else{
    text.textContent=" ";
}
});