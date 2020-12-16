const btn_clickMe = document.getElementById('clickMe');
const btn_closePopUp = document.getElementById('btn-close');
const btn_submit = document.getElementById('btn-submit');
const btn_toDoAdd = document.getElementById('btn-ToDoAdd');

const popUp = document.getElementById('popUp');

//Input collection

const inputEmail = document.getElementById('inputEmail').value;
const inputPassword = document.getElementById('inputPassword').value;

//todoList



//Switching classes in order to show or hide element

let clickMe = () => {
    btn_clickMe.classList.remove('clickMe');
    btn_clickMe.classList.add('visibilityNone');

    popUp.classList.remove('visibilityNone');
    popUp.classList.add('form');
}

let closePopUp = () => {
    popUp.classList.remove('form');
    popUp.classList.add('visibilityNone');

    btn_clickMe.classList.remove('visibilityNone');
    btn_clickMe.classList.add('clickMe');
    btn_clickMe.textContent = 'Thank you!';
    btn_clickMe.disabled = true;
}

// let formValidation = () => {
//     if(inputPassword.value == 'password'){
//         alert('Password weak. Please use stronger combination.')
//     }
// }

btn_clickMe.addEventListener('click', clickMe);

btn_closePopUp.addEventListener('click', closePopUp);

btn_submit.addEventListener('click', function(){
    document.getElementById('sectionSite').classList.remove('visibilityNone');
    document.getElementById('sectionLogin').classList.add('visibilityNone');
});

{/* <div class="task">
<p class="task__taskText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quis.</p>
<button class="task__btnRemove">&times;</button>
</div> */}

btn_toDoAdd.addEventListener('click', (e) => {
    e.preventDefault();

    let inputTask = document.getElementById('inputTask').value;

    let divSpan = document.createElement('div');
    divSpan.className = 'task';
    document.getElementById('divNewTasks').appendChild(divSpan);

    let newTaskText = document.createElement('p');
    newTaskText.className = 'taskText';
    newTaskText.innerHTML = inputTask;
    divSpan.appendChild(newTaskText);

    let btn_removeTask = document.createElement('button');
    btn_removeTask.innerHTML = '&times;';
    btn_removeTask.className = 'btnRemove';
    divSpan.appendChild(btn_removeTask);


})
