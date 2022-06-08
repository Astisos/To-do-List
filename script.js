const input = document.querySelector('.header__input');
const btnSubmit = document.querySelector('.submit');
const btnClear = document.querySelector('.clear');
const headerError = document.querySelector('.header__error');
const listArea = document.querySelector('.list_place__list');
const btnComplete = document.querySelectorAll('.fa-check');

let ID = 0;

const checkInput = () => {
    const inputText = input.value;

    if (inputText !== "") {
        headerError.style.display = "none";
        addTask(inputText);
    } else {
       headerError.style.display = "block";
    }
}

const addTask = (inputText) => {
    console.log(inputText);
    const newTask = document.createElement('li');
    newTask.setAttribute("id", ID);

    newTask.innerHTML = `<p>${inputText}</p>`
    

    newTask.classList.add('list_place__element')
    createToolsArea(newTask)
    listArea.appendChild(newTask);
    ID++;
}

const createToolsArea = (newTask) => {

    const toolsArea = document.createElement('div')
    toolsArea.classList.add('tools')
    newTask.appendChild(toolsArea);

    const completeBtn = document.createElement('i')
    completeBtn.classList.add('complete', 'fas', 'fa-check')

    const editBtn = document.createElement('i')
    // editBtn.innerHTML = `</i><i class="fas fa-pen edit">`
    editBtn.classList.add('edit', 'fas', 'fa-pen')

    const deleteBtn = document.createElement('i')
    // deleteBtn.innerHTML = `<i class="fas fa-times delete"></i>`
    deleteBtn.classList.add('delete', 'fas', 'fa-times')


    toolsArea.appendChild(completeBtn)
    toolsArea.appendChild(editBtn)
    toolsArea.appendChild(deleteBtn)
    
}

checkClick = (e) => {
    
    const selectedTarget = e.target;

    if (selectedTarget.classList.contains('complete')){
       selectedTarget.closest('li').classList.toggle('completed');
       selectedTarget.closest('.complete').classList.toggle('completed');
    }
    if (selectedTarget.classList.contains('edit')){
        editTask(e)
    }
    if (selectedTarget.classList.contains('delete')){
        selectedTarget.closest('li').remove();
    }
}

const editTask = (e) => {
    // here function for editing task
}




btnSubmit.addEventListener('click', checkInput);
listArea.addEventListener('click', checkClick);