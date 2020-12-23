const btn_clickMe = document.getElementById('clickMe');
const btn_closePopUp = document.getElementById('btn-close');
const btn_submit = document.getElementById('btn-submit');
const popUp = document.getElementById('popUp');
// const agreement = document.getElementById('checkbox');
const btn_newAcc = document.getElementById('btn-createNew');

// Click me dugme za otvaranje PopUp forme
let clickMe = () => {

    btn_clickMe.classList.remove('clickMe');
    btn_clickMe.classList.add('visibilityNone');

    popUp.classList.remove('visibilityNone');
    popUp.classList.add('form');
}
btn_clickMe.addEventListener('click', clickMe);

// ClosePopUp dugme za zatvaranje popUp forme
let closePopUp = () => {

    popUp.classList.remove('form');
    popUp.classList.add('visibilityNone');

    btn_clickMe.classList.remove('visibilityNone');
    btn_clickMe.classList.add('clickMe');
    btn_clickMe.textContent = 'Thank you!';
    btn_clickMe.disabled = true;
}
btn_closePopUp.addEventListener('click', closePopUp);


// Prikupalje input values
let inputEmail = document.getElementById('inputEmail');
let inputPassword = document.getElementById('inputPassword');

//Niz objekata sa LogIn info
let usersArray = [{
    username:'Filip',
    password:'123'
}];

//Dopuna niza objekata sa LogIn info, dodavanje novog objekta
btn_newAcc.addEventListener('click', (e) => {
    
    if(inputEmail.value !== "" && inputPassword.value !== ""){
    usersArray.push(
        {
            username: inputEmail.value,
            password: inputPassword.value
        }
    )
    }else{
        alert('Wow, such an empty.')
    }
   
});

// agreement.addEventListener('check', (e) => {
//     e.preventDefault();

//     if(agreement.checked != true){
//         btn_submit.disabled();
//     }
// })

//Submit dugme za display druge stranice (zamena klasa)... next: primena Ruta
btn_submit.addEventListener('click', (e) => {

    e.preventDefault();

    usersArray.map((el) => {
        if(el.username == inputEmail.value && el.password == inputPassword.value){
            document.getElementById('sectionSite').classList.remove('visibilityNone');
            document.getElementById('sectionLogin').classList.add('visibilityNone');
        }else if(el.username !== inputEmail.value) {
            alert('Wrong username or password');
        }
    })

});
