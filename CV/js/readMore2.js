const readMoreBtn2 = document.querySelector('.read-more-button2');
const text = document.querySelector('.text-proiecte');

readMoreBtn2.addEventListener('click', (e)=>{
    text.classList.toggle('show-more');
    if(readMoreBtn2.innerText === 'Read More'){
        readMoreBtn2.innerText = 'Read Less';
    }else{
        readMoreBtn2.innerText = 'Read More';
    }
});
