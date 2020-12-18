const btn_clickMe = document.getElementById('clickMe');
const btn_closePopUp = document.getElementById('btn-close');
const btn_submit = document.getElementById('btn-submit');
const popUp = document.getElementById('popUp');
const btn_newAcc = document.getElementById('btn-createNew');

let clickMe = () => {

    btn_clickMe.classList.remove('clickMe');
    btn_clickMe.classList.add('visibilityNone');

    popUp.classList.remove('visibilityNone');
    popUp.classList.add('form');
}

btn_clickMe.addEventListener('click', clickMe);

////////////////////////////////////////

let closePopUp = () => {

    popUp.classList.remove('form');
    popUp.classList.add('visibilityNone');

    btn_clickMe.classList.remove('visibilityNone');
    btn_clickMe.classList.add('clickMe');
    btn_clickMe.textContent = 'Thank you!';
    btn_clickMe.disabled = true;
}

btn_closePopUp.addEventListener('click', closePopUp);

////////////////////////////////////////

let inputEmail = document.getElementById('inputEmail');
let inputPassword = document.getElementById('inputPassword');

let usersArray = [{
    username:'Filip',
    password:'123'
}];

// btn_newAcc.addEventListener('click', (e) => {
//     usersArray.push(
//         {
//             username: inputEmail.value,
//             password: inputPassword.value
//         }
//     )
//         // console.log(usersArray);
// });

btn_submit.addEventListener('click', (e) => {

    usersArray.map((el) => {
        if(el.username == inputEmail.value && el.password == inputPassword.value){
            document.getElementById('sectionSite').classList.remove('visibilityNone');
            document.getElementById('sectionLogin').classList.add('visibilityNone');
        }else {
            alert('Wrong username or password');
        }
    })

});
