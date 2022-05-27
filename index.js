const registerButton1 = document.getElementById('registerButton')
const registerButton2 = document.getElementById('registerButtonMobile')
const closeButon = document.getElementById('closeModal');


registerButton1.addEventListener("click", () => {
  const registerModal = document.getElementById('register');
  registerModal.style.display = 'block';
});

registerButton2.addEventListener("click", () => {
  const registerModal = document.getElementById('register');
  registerModal.style.display = 'block';
})
