var username = document.loginForm.username;
var messageUser = document.getElementById('messageUser');

function userVerification()
{
    if(username.value.length < 3 || username.value.length > 8){
        messageUser.innerHTML = "Este nevioie de cel putin 3 caractere si maxim 8";
        messageUser.style.color = 'red';
        username.style.backgroundColor = 'red';
        username.style.color = 'white';
        return false;
    }else{
        messageUser.innerHTML='';
        username.style.backgroundColor = 'white';
        username.style.color = 'black';
        return true;
    }
}

var password = document.loginForm.password;
var messagePassword = document.getElementById('messagePassword');

function passwordVerification()
{  
    if(password.value.length < 6 || password.value.length > 12){
    messagePassword.innerHTML = "Este nevioie de cel putin 6 caractere si maxim 12";
    messagePassword.style.color = 'red';
    password.style.backgroundColor = 'red';
    return false
    }else{
    messagePassword.innerHTML='';
    password.style.backgroundColor = 'white';
    return true;
    }

}

function mySubmitFunction(){
   var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;
   if(username == "admin" && password == "parola"){
    window.open("index.html");
   }else{
    alert("Username sau parola incorecte");
   }

}



