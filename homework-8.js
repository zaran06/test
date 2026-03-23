import { productCards } from "./product-cards.js";
// 3. Задание: Создание и реализование шаблона для продуктовых карточек.
function renderCards(cardsArray) {
const productTemplate = document.getElementById("product-template");
const container = document.querySelector(".container");

if (!container || !productTemplate) return;

container.innerHTML = "";

cardsArray.forEach(productCard => {
  const productCardClone = productTemplate.content.cloneNode(true);

  productCardClone.querySelector(".card-title").textContent = productCard.title;
  productCardClone.querySelector(".card-category").textContent = productCard.skinType;
  productCardClone.querySelector(".card-description").textContent = productCard.description;
  productCardClone.querySelector(".card-image").src = `images/${productCard.image}.png`;
  productCardClone.querySelector(".price-value").textContent = `${productCard.price} руб.`;

  const compositionList = productCardClone.querySelector(".composition-list");
  productCard.composition.forEach(item => {
   const li = document.createElement("li");
   li.textContent = item;
   compositionList.appendChild(li);
  }); 

  container.appendChild(productCardClone);
  });
}

// 4. Задание: Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание
 const productDescriptionsByReduce = productCards.reduce((acc,item) => {
  acc[item.title] = item.description;
  return acc;
}, {});
console.log(productDescriptionsByReduce);

// 5. Задание: Спрашиваем у пользователя число от 1 до 5 и показываем ровно столько карточек.
function getCardCount() {
  const input = prompt("Сколько карточек отобразить? От 1 до 5")
  const cardAmount = input === null || input.trim() === "" ? NaN: Number(input);

  if(cardAmount >=1 && cardAmount <=5) {
    return cardAmount;
  } else {
    alert("Ошибка! Введите число от 1 до 5");
    return null; 
  }
}

const count = getCardCount();

if(count !== null) {
  const cardsToDisplay = productCards.slice(0, count);
  renderCards(cardsToDisplay);
} else {
}  




