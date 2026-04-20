import { Coffee } from "./Coffee.js";
import { Tea } from "./Tea.js";
import { Juice } from "./Juice.js";
import { Cafe } from "./Cafe.js";

const bumbleCoffee = new Coffee("Бамбл", 0.5, 350, 40, "Колумбия", "Нет");
console.log(bumbleCoffee.getInfo());

const blackTea = new Tea("Черный Чай", 0.3, 900, 90, "Нилгири", 2);
console.log(blackTea.getInfo());

const orangeJuice = new Juice("Апельсиновый сок", 0.5, 500, 10, "Апельсин", "Свежевыжатый");
console.log(orangeJuice.getInfo());

const myCafe = new Cafe("Rahat Coffee", "ул. Природная 6");
myCafe.showInfoCafe();
myCafe.orderDrink(orangeJuice);
console.log(orangeJuice.getInfo());