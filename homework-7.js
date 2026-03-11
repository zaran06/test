import { comments } from "./comments.js";

/* Уровень 1 
 2. Задание: Создал массив чисел от 1 до 10, отфильтровал его , чтобы получился массив чисел, начиная с 5. */
const numbers = [1,2,3,4,5,6,7,8,9,10];
const filteredNumbers = numbers.filter(item => item >= 5);
console.log(filteredNumbers);

// 3. Задание: Поиск элемента в массиве через .includes() 
const furnitures = ["Стол", "Стул", "Шкаф", "Тумба", "Антресоль"];
const checkResult = furnitures.includes("Тумба");
console.log(checkResult);

// 4. Задание: Универсальная функция для реверса массивов.
function reverseArray (array) {
  array.reverse();
}
reverseArray(numbers);
reverseArray(furnitures);

/* Уровень 2 
 7. Задание: Вывод комментариев с почтой в домене .com */
const usersMail = comments.filter(item => item.email.includes(".com"));
console.log(usersMail);

// 8. Задание: Перебираем массив и меняем postId в зависимости от id.
const commentsByPostId = comments.map(item => ({
  ...item,
  postId: item.id <= 5 ? 2 : 1
}));
console.log(commentsByPostId);

// 9. Задание: Оставляем в объектах только id и name.
const commentNames = comments.map(item => {
  return {
    id: item.id,
    name: item.name
  };
});
console.log(commentNames);

// 10. Задание: Добавил новое свойство объектам, isInvalid и проверил length body > 180.
const validatedComments = comments.map(item => {
  item.isInvalid = item.body.length > 180;
  return item;
});

/* Уровень 2 
 11. Задание: Методом массива map и reduce вывел массив почт.*/
const commentEmailsByReduce = comments.reduce((acc, item)=> {
  acc.push(item.email);
  return acc;
}, []);
const commentEmailsByMap = comments.map(item => {
  return item.email
})
console.log(commentEmailsByReduce, commentEmailsByMap);

// 12. Задание: Привел массив к строке с помощью методов toString() и join().
const emailsByString = commentEmailsByReduce.toString();
console.log(emailsByString);
const emailsByJoin = commentEmailsByMap.join(" - ");
console.log(emailsByJoin);