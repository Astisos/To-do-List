const input = document.querySelector('.header__input');
const btnSubmit = document.querySelector('.submit');
const btnClear = document.querySelector('.clear');
const headerError = document.querySelector('.header__error');
const listArea = document.querySelector('.list_place__list');
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

    // newTask.innerHTML = ` <li class="list_place__element">${inputText}<i class="fas fa-check"></i><i class="fas fa-pen"></i><i class="fas fa-times"></i></li>
    newTask.innerText = `${inputText}`
    

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
    completeBtn.classList.add('complete')
    completeBtn.innerHTML = `<i class="fas fa-check"></i>`

    const editBtn = document.createElement('i')
    editBtn.classList.add('edit')
    editBtn.innerHTML = `</i><i class="fas fa-pen">`

    const deleteBtn = document.createElement('i')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = `<i class="fas fa-times"></i>`


    toolsArea.appendChild(completeBtn)
    toolsArea.appendChild(editBtn)
    toolsArea.appendChild(deleteBtn)
    
}



btnSubmit.addEventListener('click', checkInput)