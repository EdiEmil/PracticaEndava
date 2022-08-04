const message = document.getElementById('message');
const btnSubmit = document.getElementById('btnSubmit');
const output = document.getElementById('outputMessage');


btnSubmit.onclick = function(){
  const valueMessage = message.value;
    if(message){
    localStorage.setItem("key1",valueMessage);
  }
};

//check for Navigation Timing API support
if (window.performance) {
    const value = localStorage.getItem('key1');
    const valueAfisare = document.createElement("div");
    valueAfisare.innerHTML = value;
    output.appendChild(valueAfisare);
  }
  
// const value = localStorage.getItem('key1');
// output.innerHTML +=`${value}`;