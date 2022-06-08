const input = document.querySelector('.header__input');
const btnSubmit = document.querySelector('.submit');
const btnClear = document.querySelector('.clear');
const headerError = document.querySelector('.header__error');
const listArea = document.querySelector('.list_place__list');
const btnComplete = document.querySelectorAll('.fa-check');


//POPUP
const popup = document.querySelector('.popup');
const popupInput = document.querySelector('.popup__input');
const btnCancel = document.querySelector('.cancel');
const btnAccept = document.querySelector('.accept');
const popupInfo = document.querySelector('.popup__info')
let editedToDo = ''; 


let ID = 0;

const checkInput = () => {
    const inputText = input.value;

    if (inputText !== "") {
        headerError.style.display = "none";
        addTask(inputText);
       input.value = "";
    } else {
       headerError.style.display = "block";
    }
}

const addTask = (inputText) => {
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
    editBtn.classList.add('edit', 'fas', 'fa-pen')

    const deleteBtn = document.createElement('i')
    deleteBtn.classList.add('delete', 'fas', 'fa-times')


    toolsArea.appendChild(completeBtn)
    toolsArea.appendChild(editBtn)
    toolsArea.appendChild(deleteBtn)
    
}

checkClick = (e) => {
    
    const selectedTarget = e.target;

    if (selectedTarget !== "") {

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
}

const editTask = (e) => {

    popup.style.display = "flex";
    const oldValue = e.target.closest('li').id;
    editedToDo = document.getElementById(oldValue);
    popupInput.value = editedToDo.firstChild.textContent;

}

const changeTask = () => {

    if (popupInput.value !== "") {
        editedToDo.firstChild.textContent = popupInput.value;
        closePopup()
    } else {
        popupInfo.textContent = "Enter new task content!"
    }

}


const closePopup = () => {
    popup.style.display = "none";
    popupInfo.textContent = "";
}

const clearAll = () => {
    listArea.textContent = "";
}

btnClear.addEventListener('click', clearAll)
btnAccept.addEventListener('click', changeTask)
btnCancel.addEventListener('click', closePopup)
btnSubmit.addEventListener('click', checkInput);
listArea.addEventListener('click', checkClick);