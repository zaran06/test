const statusMessage = document.querySelector(".status-download");
const cardsContainer = document.querySelector(".users-container");
const cardTemplate = document.getElementById("user-card-template");
const deleteAllcardsButton = document.getElementById("delete-all-cards-button");
const getAllcardsButton = document.getElementById("get-all-cards-button");

const savedUsers = localStorage.getItem("users");

if (savedUsers === null) {
  loadUsers();
} else {
  statusMessage.textContent = "";
  const users = JSON.parse(savedUsers);
  renderCards(users);
}

async function loadUsers() {
  statusMessage.textContent = "Данные загружаются";
  await new Promise((resolve) => setTimeout(resolve, 2000));

  try {
    const response = await fetch("users.json");

    if (!response.ok) {
      throw new Error("Ошибка при загрузке данных");
    }

    const users = await response.json();
    localStorage.setItem("users", JSON.stringify(users));
    statusMessage.textContent = "";
    renderCards(users);
  } catch (error) {
    statusMessage.textContent = error.message;
  }
}

function renderCards(usersArray) {
  cardsContainer.innerHTML = "";
  usersArray.forEach((user) => {
    const card = cardTemplate.content.cloneNode(true);
    card.querySelector(".user-id").textContent = "ID: " + user.id;
    card.querySelector(".user-name").textContent = "Name: " + user.name;
    card.querySelector(".user-surname").textContent = "Surname: " + user.surname;
    card.querySelector(".user-email").textContent = "Email: " + user.email;
    card.querySelector(".user-age").textContent = "Age: " + user.age;

    const cardElement = card.querySelector(".user-card");
    const deleteButton = card.querySelector(".user-delete-button");
    deleteButton.addEventListener("click", () => {
      cardElement.remove();
      const currentUsers = JSON.parse(localStorage.getItem("users"));
      const filteredUsers = currentUsers.filter((item) => item.id !== user.id);
      localStorage.setItem("users", JSON.stringify(filteredUsers));
    });

    cardsContainer.append(card);
  });
}

deleteAllcardsButton.addEventListener("click", () => {
  localStorage.clear();
  cardsContainer.innerHTML = "";
});

getAllcardsButton.addEventListener("click", () => {
  if (cardsContainer.innerHTML !== "") {
    alert("Пользователи уже отображены на странице!");
    return;
  }
  const currentMemory = localStorage.getItem("users");
  if (currentMemory !== null) {
    const users = JSON.parse(currentMemory);
    renderCards(users);
  } else {
    loadUsers();
  }
});
