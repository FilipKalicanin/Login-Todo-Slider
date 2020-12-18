// INPUT COLLECTING

const btn_toDoAdd = document.getElementById('btn-ToDoAdd');
const selectList = document.getElementById('selectList');
const selectOption = document.getElementsByTagName('option');
const searchTab = document.getElementById('todoSearch');

// Array of ToDos
let todoArray = [{
    tekst: inputTask.value
}];

// Function for creation of new List Item on click
const newElement = () => {

    let inputTask = document.getElementById('inputTask').value;

    let divSpan = document.createElement('div');
    divSpan.className = 'task';
    document.getElementById('divNewTasks').appendChild(divSpan);

    let newTaskText = document.createElement('p');
    newTaskText.className = 'taskText';
    newTaskText.innerHTML = inputTask;
    divSpan.appendChild(newTaskText);

    // Button to remove task from Task item
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

    // Button to mark Item as Finished
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
    todoArray.push(divSpan);
}


// Implemetation of 'newElement' function + basic input check
btn_toDoAdd.addEventListener('click', (e) => {
    e.preventDefault();

    if(inputTask.value === ''){
        alert('New Task cannot be empty.');
    }else {
        newElement();
    }
    inputTask.value = '';

})


// Select button / Done with class manipulation
selectList.addEventListener('change', (e) => {

    if(selectList.value == 'done'){
        todoArray.forEach(el => {
            if(el.classList.contains('taskDone')){
                el.style.display = 'inline-block';
            }else{
                el.style.display = 'none';
            }
        });
    }else if(selectList.value == 'not-done'){
        todoArray.forEach(el => {
            if(el.className == 'task'){
                el.style.display = 'inline-block';
            }else{
                el.style.display = 'none';
            }
        });
    }else {
        todoArray.forEach(el => el.style.display = 'inline-block')
    }

})


// Search tab
searchTab.addEventListener('input', (e) => {

    console.log(searchTab.value);
    console.log(todoArray);

    todoArray.filter(el => {
        if(el.tekst.toLowerCase().includes(e.target.value.toLowerCase())){
        el.style.display = 'inline-block';
    }else{
        el.style.display = 'none';
    }
    });
})

