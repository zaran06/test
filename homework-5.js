  //1.Задание: Создать функцию, которая принимает город и температуру и выводит сообщение о температуре.
  function showCityTemp(city, temp) {
  console.log(`Сейчас в ${city} температура ${temp} градусов по Цельсию`);
}
  showCityTemp("Самаре", -4);

//2.Задание: Создать переменную скорости света и функцию, которая проверяет переданную скорость.
  const speedOfLight = 299792458;
  function checkSpeed(speed) {
  if (speed > speedOfLight) {
    console.log("Сверхсветовая скорость");
  } else if (speed < speedOfLight) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
}
  checkSpeed(232344343766)

  //3.Задание:Создать переменные товара и его цены и функцию, которая проверяет, хватает ли бюджета на покупку.
  const product = "auto";
  const price = 500;

  function purchaseAproduct(budget) {
  if (budget >= price) {
    console.log(`${product} приобретён. Спасибо за покупку`);
  } else {
    console.log(`Вам не хватает ${price-budget} пополните баланс`);
  }
}
  purchaseAproduct(300)
  //4.Задание:Создать функцию, которая проверяет, совершеннолетний ли человек.

  function checkId(age) {
  if (age >=18) {
    console.log(`Ты совершеннолетний!`);
  } else { 
    console.log(`Ты не совершеннолетний!`);
  }
}
  checkId(16)
  checkId(20)
//5.Задание:Создать 3 переменные по своему усмотрению.
  let age = 28;
  const home = "furniture";
  const thisOriginal = true;


