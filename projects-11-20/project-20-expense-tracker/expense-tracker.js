let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
const total = document.querySelector('#total');
const ul = document.querySelector('#expenseList');
function refreshTotal(){
    let totalExpense = 0;
    expenses.forEach(expense =>{
            totalExpense = totalExpense + parseFloat(expense.amount);
    })
    total.textContent = `Total: £${totalExpense}`;
}
function renderExpenses(){
    ul.innerHTML = ''
    expenses.forEach(expense=>{
        const li = document.createElement('li');
        li.classList.add('expense-item');
        const nameSpan = document.createElement('span');
        const amountSpan = document.createElement('span');
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        nameSpan.textContent = expense.name;
        amountSpan.textContent = expense.amount;
        deleteBtn.textContent = 'delete';
        deleteBtn.dataset.id = expense.ID;
        li.appendChild(nameSpan);
        li.appendChild(amountSpan);
        li.appendChild(deleteBtn);
        ul.appendChild(li);
    })
}
ul.addEventListener('click', (e)=>{
    if (e.target.tagName !== 'BUTTON') return;
    const id = Number(e.target.dataset.id);
    expenses = expenses.filter(expense => expense.ID !== id);
    renderExpenses();
    refreshTotal();
    localStorage.setItem('expenses', JSON.stringify(expenses));
    }
)
function addExpense(){
    const expenseName = document.querySelector('#expenseName').value.trim();
    const amount = document.querySelector('#expenseAmount').value.trim();
    const expensesId = Date.now();
    if (expenseName !== '' && amount !== ''){
        expenses.push({name: expenseName, amount: amount, ID: expensesId});
        document.querySelector('#expenseName').value = '';
        document.querySelector('#expenseAmount').value = '';
        renderExpenses();
        refreshTotal();
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }
}
const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', addExpense);
renderExpenses();
refreshTotal();