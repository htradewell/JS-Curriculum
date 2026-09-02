const toggleBtn = document.querySelector('#toggleBtn');
const dark = localStorage.getItem('darkMode');
if (dark==='true'){
    document.body.classList.add('dark');
}
toggleBtn.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('darkMode', isDark);
})
