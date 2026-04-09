import { Modal } from "./Modal.js";
import { Form } from "./Form.js";

const regModal = new Modal("registration-modal");
const regForm = new Form("registration-form");

// 4. Задание: Валидация и отправка формы подписки в футере с выводом email в консоль в виде объекта.
const footerForm = new Form("form-email");

footerForm.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = footerForm.getValues();
  console.log(data);
  footerForm.reset();
});

// 5. Задание: Открытие модалки .modal-showed по клику (с оверлеем и центровкой в CSS) и закрытие через крестик или фон.
const registrationButton = document.getElementById("registration-button");

registrationButton.addEventListener("click", () => {
  regModal.open();
});

// 6. Задание: // ЗАДАНИЕ: Валидация формы регистрации (проверка паролей и checkValidity), создание объекта user с датой createdOn, вывод в консоль и закрытие модалки.
regForm.form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstPassword = document.getElementById("password").value;
  const secondPassword = document.getElementById("repeat-password").value;

  if (firstPassword !== secondPassword) {
    alert("Пароли не совпадают!");
    return;
  }

  if (!regForm.validate()) {
    alert("Пожалуйста, заполните все поля корректно");
    return;
  }

  const formValues = regForm.getValues();
  const user = {
    ...formValues,
    createdOn: new Date()
  };

  console.log(user);
  regModal.close();
  regForm.reset();
});