  // покраска первой карточки 
  const recolorFirstCardButton = document.getElementById('recolor-first-card-button');
  const firstProductCard = document.querySelector('.product-card');
  const greenHashColor ='#28a745';

  recolorFirstCardButton.addEventListener('click', () => {
    firstProductCard.style.backgroundColor=greenHashColor;
  })

  // покраска всех карточек
  const blueHashColor ='#6fbaec'
  const productCards = document.querySelectorAll('.product-card');
  const recolorAllCardButton = document.getElementById('recolor-all-card-button');

  recolorAllCardButton.addEventListener('click', () => {
  productCards.forEach(card => {
    card.style.backgroundColor = blueHashColor;
  });
})

  // Переход на страницу Google 
  const googleOpenButton = document.getElementById('open-google-button');
  googleOpenButton.addEventListener('click', openGoogle);

  function openGoogle() {
    const answer = confirm('Вы действительно хотите перейти на сайт Google?') 
    if (answer === true) {
      window.open('https://google.com');
    } else {

  }
}

  // Вывод контента элемента в консоль 
  const mainTitle = document.querySelector('.main-title')
  mainTitle.addEventListener('mouseenter', () => {
    console.log(mainTitle.textContent)
  });

  // Добавление новой кнопки которая меняет цвет при нажатии
  const changeTheColorOfTheButton = document.getElementById('change-the-color-of-the-button');
  changeTheColorOfTheButton.addEventListener('click', () => {
    changeTheColorOfTheButton.classList.toggle ('active')
})
