const addBtn = document.querySelector('#addBtn');
const ul = document.querySelector('#todoList');
addBtn.addEventListener('click', ()=>{
    const todo = document.querySelector('#todoInput').value.trim();
    if (todo === '') return;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    const li = document.createElement('li');
    const todoSpan = document.createElement('span');
    todoSpan.textContent = todo;
    li.appendChild(todoSpan);
    li.appendChild(deleteBtn);
    ul.appendChild(li);
    document.querySelector('#todoInput').value = '';
})
ul.addEventListener('click', (e)=>{
    if (e.target.tagName !== 'BUTTON') return;
    e.target.parentElement.remove();
})