const btn_toDoAdd = document.getElementById('btn-ToDoAdd');

const selectList = document.getElementById('selectList');
const selectOption = document.getElementsByTagName('option');

const searchTab = document.getElementById('todoSearch');

let todoArray = [];

const newElement = () => {

    let inputTask = document.getElementById('inputTask').value;

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
    todoArray.push(divSpan);
}

btn_toDoAdd.addEventListener('click', (e) => {
    e.preventDefault();

    if(inputTask.value === ''){
        alert('New Task cannot be empty.');
    }else {
        newElement();
    }
    inputTask.value = '';

})

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

const filterArray = (todoArray) => {

    todoArray.forEach(el => {
        el.style.display = 'inline-block';
    })
}


searchTab.addEventListener('input',(e) => {
    if(e.target.value){
        todoArray.filter(el => el.newTaskText.toLowerCase().includes(e.target.value.toLowerCase()))
        filterArray();
    }
})





