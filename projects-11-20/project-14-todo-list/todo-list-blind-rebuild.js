//defining what we need, todo holds the inputs, using an array not an object thing becuase data isnt labelled, ul is the parent for the <li>s so that they all appear where we want
const todos = [];
const todoInput = document.querySelector('#todoInput');
const ul = document.querySelector('#todoList')
const addBtn = document.querySelector('#addBtn');
//when add button is clicked, we verify the presence of an input, then adds them with a delete button to the li, and then to the lis parent ul
addBtn.addEventListener('click', ()=>{
    const trimmed = todoInput.value.trim();
    if (trimmed === '') return;
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';    
    const span = document.createElement('span');
    span.textContent = trimmed;
    li.appendChild(span);
    li.appendChild(deleteBtn);
    ul.appendChild(li);
});
// listens for clicks of all of the delte buttons, deletes the target
ul.addEventListener('click', (e)=>{
    if (e.target.tagName !== 'BUTTON') return;
    e.target.parentElement.remove();
});