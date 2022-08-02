const btnAdauga = document.querySelector('#btnAdaugare');
const btnSterge = document.querySelector('#btnStergere');
const input = document.querySelector('#input');
const list = document.querySelector('#list');

btnAdauga.addEventListener('click',function(){
    if(input.value){
        const li = document.createElement('li');
        li.onclick = function() {
            li.style.backgroundColor = 'red';
        };
        li.classList.add("elemLista");
        li.textContent = input.value;
        list.append(li);
        input.value='';
    }else{
        alert("Introduceti text in input");
    }
});

btnSterge.addEventListener('click',function(){
  const li = document.querySelector('.elemLista');
  
  
});

const li = document.getElementsByClassName('elemLista');
