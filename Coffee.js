import { Drink } from "./Drink.js";

export class Coffee extends Drink {
  constructor(name, size, price, temperature, beans, milk) {
    super(name, size, price, temperature)
    this.beans = beans;
    this.milk = milk;
  }

  getInfo() {
    return `${super.getInfo()}, Зёрна: ${this.beans}, Молоко: ${this.milk}`;
  }
}