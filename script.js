const createAccount=document.querySelector(".create");
const Password=document.querySelector("#password");
const confirmPassword=document.querySelector("#conf_password");
const text=document.querySelector(".text");
const login=document.querySelector(".login");
const loginB=document.querySelector(".log");
const logout=document.querySelector(".logout");

createAccount.addEventListener("click",()=>{
    document.location="admin.html";
});
login.addEventListener("click",()=>{
    document.location="login.html";
});
loginB.addEventListener("click",()=>{
    document.location="admin.html";
});
logout.addEventListener("click",()=>{
    document.location="index.html";
});

if(password===confirmPassword){
    text.textContent=" ";
}
else if(confirmPassword===" "){
text.textContent=" Confirm your password ";
}
else if(password===""){
    text.textContent=" Enter a password!!";
}else if(Password!==confirmPassword && confirmPassword){
    text.textContent="Passwords are not matching";
}
else{
    text.textContent=" ";
}
