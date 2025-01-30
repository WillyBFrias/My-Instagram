const placeHolder = document.querySelectorAll('form div span');
const inputs   = document.querySelectorAll('form div input');
const showPass = document.querySelector('.password .show-pass');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('#login');

placeHolder.forEach((e)=> {
    e.addEventListener('click', () => {
        e.previousElementSibling.focus();

        if(e.textContent == 'Password') {
            showPass.style.display = 'flex';
        } else {

        }
    })
})

inputs.forEach((e) => {
    e.addEventListener('keypress', () => {
        e.classList.add('input-c');
        e.nextElementSibling.classList.add('small-p');
    })
})