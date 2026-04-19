import { Drink } from "./Drink.js";

export class Tea extends Drink {
  constructor(name, size, price, temperature, teaType, brewTime) {
    super(name, size, price, temperature)
    this.teaType = teaType;
    this.brewTime = brewTime;
  }

  getInfo() {
    return `${super.getInfo()}, Тип чая: ${this.teaType}, Время заваривания: ${this.brewTime}`;
  }
}

