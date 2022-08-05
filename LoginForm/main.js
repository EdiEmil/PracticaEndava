function setFormMessage(formElement, type, message){ // formElement = login sau createAccount, type= error sau succes
    const messageElement = formElement.querySelector(".form-message");
    
    messageElement.textContent = message;
    messageElement.classList.remove("form-message-succes", 'form-message-error'); // aici se reseteaza tipul de mesaj pe care il afisam
    messageElement.classList.add(`form-message-${type}`); // in functie cu ce tip de measj se apeleaza functia, folosim clasa form-message-succes sau error si linia de sus reseteaza clasele pt o noua apelare a functiei
}

function setInputError(inputElement, message){
    inputElement.classList.add('form-input-error'); // adaugam clasa asta care este definita in css
    inputElement.parentElement.querySelector('.form-input-error-message').textContent = message; // se ia inputul(unde am introdus username-ul) se merge la parinte(la divul in care se afla) se alege div-ul de mesaj si se afiseaza mesajul primit ca parametru
}

function clearInputError(inputElement){
    inputElement.classList.remove('form-input-error');
    inputElement.parentElement.querySelector('.form-input-error-message').textContent = ""; // la fel ca functia de mai sus dar in momentul in care nu mai avem eroare la input stergem mesajul
}

document.addEventListener("DOMContentLoaded",() => {  //  dupa ce pagina se incarca se excuta functia asta
  const loginForm = document.querySelector('#login');
  const createAccountForm = document.querySelector('#createAccount');

  document.querySelector('#linkCreateAccount').addEventListener('click', e => {  // cand dam click pe create account se adauga la form-ul de login clasa "form-hidden"(care are display:none)
        e.preventDefault(); // am adaugat e, un event, atunci cand dam click sa nu se apeleze href-ul(href este default) pentru ca ne-ar trimite la locatia specificata in href
        loginForm.classList.add('form-hidden');                                   
        createAccountForm.classList.remove('form-hidden');                      // si de la formul de create account se scoate clasa "form-hidden" si asa se trece de la un form la altul
  }); 

  document.querySelector('#linkLogin').addEventListener('click', e => {  // invers fata de functia de mai sus
        e.preventDefault();
        loginForm.classList.remove('form-hidden');                                   
        createAccountForm.classList.add('form-hidden');
    }); 

    loginForm.addEventListener("submit", e => { // cu e luam eventul prin care form-ul de login da submit
        e.preventDefault();

        //se foloseste AJAX/Fetch login

        setFormMessage(loginForm, "error", "Username sau parola incorecte"); // apela functia pentru afisarea mesajului de eroare in cazul in care nu se reuseste logarea
    });

    document.querySelectorAll('.form-input').forEach(inputElement => { // pt fiecare element care are clasa "form-input"
        inputElement.addEventListener('blur', e => {   // blur=cand se deselecteaza casuta de input         
            if(e.target.value.length > 0 && e.target.value.length <10 ){  // daca mesajul este mai mare decat 0 sau mai mic decat 10
                setInputError(inputElement, "Username-ul trebuie sa fie cel putin de 10 caractere"); // se apeleaza functia prin care se afiseaza mesajul de eroare
            }                                                                                        // printr-un id la elementul respectiv se poate selecta exact campul pe care il verificam daca adaugam in fi e.target.id === 'id-ul pe care il punem' 
        });
              // se apeleaza acelasi si pentru parola pentru ca am selectat toate elementele cu .form-input dar parola nu are un mesaj de afisat si atunci doar bordura are culoarea rosie
        inputElement.addEventListener('input', e => {
            clearInputError(inputElement);
        });
    });
});