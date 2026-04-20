import { Drink } from "./Drink.js";

export class Juice extends Drink {
  constructor(name, size, price, temperature, fruitType, typeOfJuice) {
    super(name, size, price, temperature)
    this.fruitType = fruitType;
    this.typeOfJuice = typeOfJuice;
  }

  getInfo() {
    return `${super.getInfo()}, Вид фрукта: ${this.fruitType}, Вид сока: ${this.typeOfJuice}`;
  }
}