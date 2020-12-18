const btn_clickMe = document.getElementById('clickMe');
const btn_closePopUp = document.getElementById('btn-close');
const btn_submit = document.getElementById('btn-submit');
const btn_toDoAdd = document.getElementById('btn-ToDoAdd');

const popUp = document.getElementById('popUp');

//Input collection

const inputEmail = document.getElementById('inputEmail').value;
const inputPassword = document.getElementById('inputPassword').value;

///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// LOG IN PAGE //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

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

btn_clickMe.addEventListener('click', clickMe);

btn_closePopUp.addEventListener('click', closePopUp);

btn_submit.addEventListener('click', function(){
    document.getElementById('sectionSite').classList.remove('visibilityNone');
    document.getElementById('sectionLogin').classList.add('visibilityNone');
});

///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// TO DO LIST ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

btn_toDoAdd.addEventListener('click', (e) => {
    e.preventDefault();

    let inputTask = document.getElementById('inputTask').value;

    if(inputTask === ''){
        alert('New Task cannot be empty.');
    }else {
        let divSpan = document.createElement('div');
        divSpan.className = 'task';
        document.getElementById('divNewTasks').appendChild(divSpan);
    
        let newTaskText = document.createElement('p');
        newTaskText.className = 'taskText';
        newTaskText.innerHTML = inputTask;
        divSpan.appendChild(newTaskText);
    
        let btn_removeTask = document.createElement('button');
        btn_removeTask.innerHTML = '<i class="fas fa-trash-alt">';
        btn_removeTask.className = 'btnRemove';
        btn_removeTask.id = 'btnTaskRemove';
        divSpan.appendChild(btn_removeTask);
        btn_removeTask.addEventListener('click', (e) => {
            e.preventDefault();
            divSpan.classList.add('fall');
            divSpan.addEventListener('transitionend', function(){
                divSpan.remove();
            })
        });
    
        let btn_finishTask = document.createElement('button');
        btn_finishTask.innerHTML = '<i class="fas fa-check">';
        btn_finishTask.className = 'btnDone';
        btn_finishTask.id = 'btnTaskDone';
        btn_finishTask.addEventListener('click', (e) => {
            e.preventDefault();
    
            divSpan.classList.toggle('taskDone');
            newTaskText.classList.toggle('taskDone');
        });
    
        divSpan.appendChild(btn_finishTask);
        
    }

    inputTask = '';

})


