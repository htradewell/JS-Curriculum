//create what we need as usable variables
const addBtn = document.querySelector("#addBtn");
const ul = document.querySelector("#todoList");
const userInput = document.querySelector("#todoInput");
//listen for the button click
addBtn.addEventListener('click', ()=>{
    if (userInput.value !== ''){
        const li = document.createElement('li');
        const span = document.createElement('span');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        span.textContent = userInput.value;
        li.appendChild(span);
        li.appendChild(deleteBtn);
        userInput.value = '';
        ul.appendChild(li);
    }
});
ul.addEventListener('click', (e)=>{
    if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
    }
});