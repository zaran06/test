// 1. Задание: Создал объект на основе персональных данных.
const personalInformation = {
  name: "Ruslan",
  surname: "Zarbaliev",
  email: "ruslan.zarbaliev63@gmail.com",
  profession: "Builder",
  position: "General Laborer",
  age: 28,
  country: "Russia",
  city: "Samara",
  maritalStatus: "Single",
  hobby: "Nature walks",
};

// 2. Задание: Создал объект в котором хранятся данные об автомобиле и добавил владельца из другого объекта.
const car = {
  brand: "Mercedes",
  model: "AMG E63S",
  year: 2023,
  color: "White",
  transmission: "Automatic",
};
car.owner = personalInformation;

// 3. Задание: Написал функцию которая принимает объект из 2 задания и проверяет есть ли в нём свойство максимальная скорость, если нету добавляет. 
function checkProperty(car) {
  if (!("maxSpeed" in car)) {
    car.maxSpeed = 300;
  }
}  
checkProperty(car);
console.log(car.maxSpeed);

// 4. Задание: Написал функцию, которая получает первым аргументом  — объект, а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение.
function showProperty(obj, property) {
  if (property in obj) {
    console.log(obj[property]);
  } else { 
    console.log("Свойство не найдено");
  }
}
showProperty(personalInformation, "hobby");

// 5. Задание: Создал массив, который содержит названия продуктов 
let products = ["horse meat", "lamb meat", "dates", "kiwi", "apple"];
console.log(products[0]);

// 6. Задание: Создал массив, состоящий из объектов, где объект представляет собой фильм и добавил в конец списка методом Push еще 1 фильм.
let movies = [
  {
    name: "1+1", 
    year: 2011,
    genre: "comedy drama"
  },
  {
    name: "Forrest Gump",
    year: 1994,
    genre: "drama"
  },
  {
    name: "Equilibrium",
    year: 2002,
    genre: "fantasy, action, thriller, drama"
  }
];
movies.push({
  name: "Strangers among us",
  year: 1988,
  genre: "horror, fantasy, action, thriller"
});

// 7. Задание: Создание второго массива объектов и объединение двух списков в один общий массив с помощью оператора.
let scienceFictionFilms = [
  {
    name: "Avatar",
    year: 2009,
    genre: "fantasy"
  },
  {
    name: "Dune",
    year: 2021,
    genre: "fantasy"
  },
  {
    name: "Matrix",
    year: 1999,
    genre: "fantasy"
  }
];
let allMovies = [...movies, ...scienceFictionFilms];
console.log(allMovies);

// 8. Задание: Функция для определения редкости фильмов.
function getRareMovies(scienceFictionFilms) {
  return scienceFictionFilms.map((film) => {
    return {
      ...film,
      isRare: film.year < 2010
    };
  });
}
let result = getRareMovies(scienceFictionFilms);
console.log(result);

