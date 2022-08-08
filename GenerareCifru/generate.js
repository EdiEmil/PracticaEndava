const button = document.getElementById('btnCifru');
const cifra1 = document.getElementById('cifra1');
const cifra2 = document.getElementById('cifra2');
const cifra3 = document.getElementById('cifra3');
const cifra4 = document.getElementById('cifra4');
let id1 = null;
let id2 = null;
let id3 = null;
let id4 = null;


// setInterval(function(){
//     setInterval(function(){
//         const randomNumber = (Math.floor((Math.random()*10)));
//         console.log(randomNumber);
//     }, 200);
// }, 1000);
    
button.addEventListener('click', () => {
   id1 = setInterval(() => {
        cifra1.innerText = (Math.floor((Math.random()*10)));    
    }, 200);
   id2 =  setInterval(() => {
        cifra2.innerText = (Math.floor((Math.random()*10)));    
    }, 200);
   id3 =  setInterval(() => {
        cifra3.innerText = (Math.floor((Math.random()*10)));    
    }, 200);
   id4 = setInterval(() => {
        cifra4.innerText = (Math.floor((Math.random()*10)));    
    }, 200);
    
    setTimeout(() =>{
        clearInterval(id1);
        clearInterval(id2);
        clearInterval(id3);
        clearInterval(id4);
     }, 5000);   
        
});


