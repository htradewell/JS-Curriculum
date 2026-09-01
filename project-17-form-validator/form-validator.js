const form = document.querySelector('#myForm');
const usernameError = document.querySelector('#usernameError');
const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passwordError');
const confirmError = document.querySelector('#confirmError');
const successMsg = document.querySelector('#successMsg');
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmError.textContent = '';
    successMsg.textContent = '';
    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const confirmPassword = document.querySelector('#confirmPassword').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valid = emailRegex.test(email);
    let allValid = true;
    if (email===''){
        allValid = false;
        emailError.textContent = 'please enter an email';
    }
    else if (!valid){
        allValid = false;
        emailError.textContent = 'invalid email entered';
    }
    if (username === ""){
        allValid = false;
        usernameError.textContent = 'please enter a username';
    }
    if (password === ''){
        allValid = false;
        passwordError.textContent = 'please enter a password';
    }
    else if (password.length < 6){
        passwordError.textContent = 'please enter a password 6 or more charecters';
        allValid = false;
    }
    if (confirmPassword !== password){
        allValid = false;
        confirmError.textContent = 'passwords dont match';
    }
    if (allValid){
        successMsg.textContent = 'Success';
    }

});