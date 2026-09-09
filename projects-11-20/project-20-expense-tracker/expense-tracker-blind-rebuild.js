let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
const addBtn = document.querySelector('#addBtn');
const ul = document.querySelector('#expenseList');
const total = document.querySelector('#total');
function renderList() {
    ul.innerHTML = ''
    expenses.forEach(expense=>{
        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.dataset.id = expense.id
        const expenseSpan = document.createElement('span');
        expenseSpan.textContent = expense.name;
        const amountSpan = document.createElement('span');
        amountSpan.textContent = expense.amount
        li.appendChild(expenseSpan);
        li.appendChild(amountSpan);
        li.appendChild(deleteBtn);
        ul.appendChild(li);
    })
}
function updateTotal(){
    let countTotal = 0
    expenses.forEach(expense => {
        countTotal = Number(expense.amount) + countTotal;
    })
    total.textContent = countTotal;
}
ul.addEventListener('click', (e)=>{
    if (e.target.tagName !== 'BUTTON') return;
    const eliminatedID = Number(e.target.dataset.id);
    expenses = expenses.filter(expense => expense.id !== eliminatedID);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    updateTotal();
    renderList();
})
addBtn.addEventListener('click', ()=>{
    const expenseName = document.querySelector('#expenseName').value.trim();
    if (expenseName === '') return;
    const expenseAmount = document.querySelector('#expenseAmount').value.trim();
    if (expenseAmount ==='') return;
    const id = Date.now();
    expenses.push({name: expenseName, amount: expenseAmount, id: id});
    renderList();
    updateTotal();
    localStorage.setItem('expenses', JSON.stringify(expenses));
    const exp = document.querySelector('#expenseName');
    const amo = document.querySelector('#expenseAmount');
    exp.value = '';
    amo.value = '';
})
renderList();
updateTotal();