export class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  showInfoCafe() {
    console.log(`Рады приветствовать вас в нашем кафе "${this.name}"!`);
    console.log(`Мы находимся по адресу: "${this.location}"!`);
  }

  orderDrink(drink) {
    console.log(`Заказ принят! Готовим ${drink.name}...`);
    drink.serveDrink();
  }
}