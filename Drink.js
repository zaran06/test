export class Drink {
  #temperature;

  constructor(name, size, price, temperature) {

    if (this.constructor === Drink) {
      throw new Error("Нельзя создавать экземпляры абстрактного класса Drink");
    }

    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getInfo() {
    return `Напиток: ${this.name}, Размер: ${this.size}, Цена: ${this.price}`;
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(newTemp) {
    this.#temperature = newTemp;
  }

  #prepareDrink() {
    console.log("Напиток готовится...");
  }

  serveDrink() {
    this.#prepareDrink()
    console.log("Напиток подан");
  }
};