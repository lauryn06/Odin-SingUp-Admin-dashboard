const createAccount=document.querySelector(".create");
const Password=document.querySelector("#password");
const confirmPassword=document.querySelector("#conf_password");
const text=document.querySelector(".text");

createAccount.addEventListener("click",()=>{
    document.location="admin.html";
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