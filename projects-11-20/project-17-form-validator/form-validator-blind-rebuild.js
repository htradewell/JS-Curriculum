const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const successMsg = document.querySelector('#successMsg');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const form = document.querySelector('#myForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let allValid = true;
    const usernameError = document.querySelector('#usernameError');
    const emailError = document.querySelector('#emailError');
    const passwordError  = document.querySelector('#passwordError');
    const confirmError = document.querySelector('#confirmError');
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent ='';
    confirmError.textContent ='';
    if (username.value.trim()===''){
        allValid = false;
        usernameError.textContent = 'please input a username';
    }
    if (email.value.trim() ===''){
        allValid = false;
       emailError.textContent = 'please input an email';
    }
    if (emailRegex.test(email.value.trim()) === false && emailError.textContent === ''){
        allValid = false;
        emailError.textContent = 'please input a valid email';
    }
    if (password.value.trim() === ''){
        allValid = false;
        passwordError.textContent = 'please input a password';
    }
    else if (password.value.trim().length < 6){
        allValid = false;
        passwordError.textContent = 'please input a password of 6 or more charecters';
    }
    if (confirmPassword.value.trim() === ''){
        allValid = false;
        confirmError.textContent = 'please input password confirmation';
    }
    if (password.value.trim() !== confirmPassword.value.trim() && confirmError.textContent===''){
        allValid = false;
        confirmError.textContent = 'passwords do not match'
    }
    if (allValid === true){
        successMsg.textContent = 'sucess';
    }
})