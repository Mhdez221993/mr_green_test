const register = document.getElementById('register');
const login = document.getElementById('login');

const openRegister = document.querySelectorAll('.openRegister')
const openLogin = document.querySelectorAll('.openLogin')

const closeRegister = document.querySelectorAll('.closeRegister')
const closeLogin = document.querySelectorAll('.closeLogin')

openRegister.forEach(button => {
  button.addEventListener('click', () => register.style.display = 'block');
});

openLogin.forEach(button => {
  button.addEventListener('click', () => login.style.display = 'block');
});

closeRegister.forEach(button => {
  button.addEventListener('click', () => register.style.display = 'none');
});

closeLogin.forEach(button => {
  button.addEventListener('click', () => login.style.display = 'none');
});