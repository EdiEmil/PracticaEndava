const readMoreBtn = document.querySelector('.read-more-button');
const text = document.querySelector('.text-proiecte');

readMoreBtn.addEventListener('click', (e)=>{
    text.classList.toggle('show-more');
    if(readMoreBtn.innerText === 'Read More'){
        readMoreBtn.innerText = 'Read Less';
    }else{
        readMoreBtn.innerText = 'Read More';
    }
});

const readMoreBtn22 = document.querySelector('.read-more-button22');
 const text22 = document.querySelector('.text-proiecte22');

readMoreBtn22.addEventListener('click', (e)=>{
    text22.classList.toggle('show-more');
    if(readMoreBtn22.innerText === 'Read More'){
        readMoreBtn22.innerText = 'Read Less';
    }else{
        readMoreBtn22.innerText = 'Read More';
    }
});

const readMoreBtn3 = document.querySelector('.read-more-button3');
 const text3 = document.querySelector('.text-proiecte3');

readMoreBtn3.addEventListener('click', (e)=>{
    text3.classList.toggle('show-more');
    if(readMoreBtn3.innerText === 'Read More'){
        readMoreBtn3.innerText = 'Read Less';
    }else{
        readMoreBtn3.innerText = 'Read More';
    }
});

const readMoreBtn4 = document.querySelector('.read-more-button4');
 const text4 = document.querySelector('.text-proiecte4');

readMoreBtn4.addEventListener('click', (e)=>{
    text4.classList.toggle('show-more');
    if(readMoreBtn4.innerText === 'Read More'){
        readMoreBtn4.innerText = 'Read Less';
    }else{
        readMoreBtn4.innerText = 'Read More';
    }
});
