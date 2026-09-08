const form = document.querySelector('#myForm');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let allTrue = true;
    const username = document.querySelector('#username');
    const email =  document.querySelector('#email');
    const password =  document.querySelector('#password');
    const confirm =  document.querySelector('#confirmPassword');
    const usernameError =  document.querySelector('#usernameError');
    const emailError =  document.querySelector('#emailError');
    const passwordError =  document.querySelector('#passwordError');
    const confirmError =  document.querySelector('#confirmError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmError.textContent = '';
    if(username.value.trim() ===''){
        allTrue = false;
        usernameError.textContent = 'please enter a username';
    }
    if(email.value.trim() ===''){
        allTrue = false;
        emailError.textContent = 'please enter an email';
    }
    if (emailError.textContent === '' && emailRegex.test(email.value) !== true){
        allTrue = false;
        emailError.textContent = 'please enter a valid email adress';
    }
    if(password.value.trim() ===''){
        allTrue = false;
        passwordError.textContent = 'please enter a password';
    }
    else if (password.value.length < 6){
        allTrue = false;
        passwordError.textContent = 'please enter a password of 6 or more charecters';
    }
    if(confirm.value.trim() ===''){
        allTrue = false;
        confirmError.textContent = 'please confirm password';
    }
    if (confirm.value !== password.value){
        allTrue = false;
        confirmError.textContent = 'passwords do not match';
    }
    if (allTrue === true){
        document.querySelector('#successMsg').textContent = 'sucess!'
    }
})