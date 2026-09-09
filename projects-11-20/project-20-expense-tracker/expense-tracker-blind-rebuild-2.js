let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
const addBtn = document.querySelector('#addBtn');
const ul = document.querySelector('#expenseList');
addBtn.addEventListener('click', ()=>{
    const expenseName = document.querySelector('#expenseName');
    const expenseAmount = document.querySelector('#expenseAmount');
    const id = Date.now();
    if (expenseName.value.trim() === '') return;
    else if (expenseAmount.value.trim() ==='') return;
    else if (Number(expenseAmount.value.trim()) <= 0) return;
    expenses.push({'name': expenseName.value.trim(), 'amount': Number(expenseAmount.value.trim()), 'id': id });
    expenseName.value = '';
    expenseAmount.value = '';
    renderList();
    refreshTotal();
    localStorage.setItem('expenses', JSON.stringify(expenses));
})
function renderList(){
    ul.innerHTML = '';
    expenses.forEach(expense =>{
        const name = expense.name;
        const nameSpan = document.createElement('span');
        nameSpan.textContent = name;
        const amount = Number(expense.amount);
        const amountSpan = document.createElement('span');
        amountSpan.textContent = amount;
        const id = expense.id;
        const deleteBtn = document.createElement('button');
        deleteBtn.dataset.id = id;
        deleteBtn.textContent = 'Delete'
        const li = document.createElement('li');
        li.classList.add('expense-item');
        deleteBtn.classList.add('delete-btn');
        li.appendChild(nameSpan);
        li.appendChild(amountSpan);
        li.appendChild(deleteBtn);
        ul.appendChild(li);
    })
}
ul.addEventListener('click', (e)=>{
    if (e.target.tagName !== 'BUTTON') return;
    const clickedId = Number(e.target.dataset.id); 
    expenses = expenses.filter(expense => expense.id !== clickedId);
    renderList();
    refreshTotal();
    localStorage.setItem('expenses', JSON.stringify(expenses));
})
function refreshTotal(){
    const total = document.querySelector('#total');
    let calcTotal = 0;
    if (expenses[0] === undefined) total.textContent = `Total: £0`;
    else {
        expenses.forEach(expense =>{
         calcTotal = Number(expense.amount) + calcTotal;
         total.textContent = `Total: £${calcTotal}`;
     })
    }
}
renderList();
refreshTotal();
