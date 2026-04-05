// 4. Задание: Валидация и отправка формы подписки в футере с выводом email в консоль в виде объекта.
const footerForm = document.getElementById("form-email");

footerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("user-email");
  console.log({ email: input.value });
  input.value = "";
});

// 5. Задание: Открытие модалки .modal-showed по клику (с оверлеем и центровкой в CSS) и закрытие через крестик или фон.
const registrationButton = document.getElementById("registration-button");
const modalOverlay = document.querySelector(".modal");
const closeButton = document.querySelector(".close-btn");

registrationButton.addEventListener("click", () => {
  modalOverlay.classList.add("modal-showed");
});

modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    modalOverlay.classList.remove("modal-showed");
  }
});

closeButton.addEventListener("click", () => {
  modalOverlay.classList.remove("modal-showed");
});

// 6. Задание: // ЗАДАНИЕ: Валидация формы регистрации (проверка паролей и checkValidity), создание объекта user с датой createdOn, вывод в консоль и закрытие модалки.
const registrationForm = document.getElementById("registration-form");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstPassword = document.getElementById("password").value;
  const secondPassword = document.getElementById("repeat-password").value;

  if (firstPassword !== secondPassword) {
    alert("Пароли не совпадают!");
    return;
  }

  if (!registrationForm.checkValidity()) {
    alert("Пожалуйста, заполните все поля корректно");
    return;
  }

  const user = {
    userName: document.getElementById("user-name").value,
    userSurName: document.getElementById("user-surname").value,
    birthDate: document.getElementById("birthdate").value,
    login: document.getElementById("login").value,
    password: document.getElementById("password").value,
    createdOn: new Date()
};

  console.log(user);
  modalOverlay.classList.remove("modal-showed");
});