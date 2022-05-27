const registerModal = document.getElementById('register');
const openRegister = document.querySelectorAll('.openRegister')
const closeRegister = document.querySelectorAll('.closeRegister')

openRegister.forEach(button => {
  button.addEventListener('click', () => registerModal.style.display = 'block');
});

closeRegister.forEach(button => {
  button.addEventListener('click', () => registerModal.style.display = 'none');
});