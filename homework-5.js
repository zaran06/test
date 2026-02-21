  // 1. Задание: Создать функцию, которая принимает город и температуру и выводит сообщение о температуре.
  function showCityTemperature(city, temperature) {
    console.log(`Сейчас в ${city} температура ${temperature} градусов по Цельсию`);
}
  showCityTemperature("Самаре", -4);

  // 2. Задание: Создать переменную скорости света и функцию, которая проверяет переданную скорость.
  const SPEED_OF_LIGHT = 299792458;
  function checkSpeed(speed) {
    if (speed > SPEED_OF_LIGHT) {
      console.log("Сверхсветовая скорость");
    } else if (speed < SPEED_OF_LIGHT) {
      console.log("Субсветовая скорость");
    } else {
      console.log("Скорость света");
    }
}
  checkSpeed(232344343766);

  // 3. Задание: Создать переменные товара и его цены и функцию, которая проверяет, хватает ли бюджета на покупку.
  const product = "auto";
  const price = 500;
  function purchaseProduct(budget) {
    if (budget >= price) {
      console.log(`${product} приобретён. Спасибо за покупку`);
    } else {
      console.log(`Вам не хватает ${price - budget} пополните баланс`);
    }
}
  purchaseProduct(300);

  // 4. Задание: Создать функцию, которая проверяет, совершеннолетний ли человек.
  function checkId(age) {
    if (age >=18) {
      console.log(`Ты совершеннолетний!`);
    } else { 
      console.log(`Ты не совершеннолетний!`);
    }
}
  checkId(16);
  checkId(20);

  // 5. Задание:Создать 3 переменные по своему усмотрению.
  let age = 28;
  const home = "furniture";
  const isOriginal = true;


