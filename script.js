// нижче буде код секції modal (щоб показуалась модалка з різними цінами при натисканні кнопки) (секція Олега)



// нижче буде код секції timer (щоб був таймер в реальному часі) (секція Олега)



// нижче буде код секції header (щоб було бургер меню) (секція Назара)



// нижче буде код секції trailer (щоб відкривалася модалка при натисканні на кнопку з відео ютуб) (секція Міші)



// нижче буде код секції series (щоб працювали switch оператори і мінявся текст 2 секцій відповідно) (секція Марка)



// нижче буде код секції news (щоб працював слайдер) (секція Даші)

const newsTrack = document.querySelector('.news-track');
const newsCards = document.querySelectorAll('.news-card');
const newsPrevBtn = document.querySelector('.prev');
const newsNextBtn = document.querySelector('.next');

let newsCurrentIndex = 0;
const newsCardsPerView = 3;
const newsTotalCards = newsCards.length;

function newsUpdateSlider() {
  const cardWidth = newsCards[0].offsetWidth + 20;
  newsTrack.style.transform = `translateX(-${newsCurrentIndex * cardWidth}px)`;
}

newsNextBtn.addEventListener('click', () => {
  if (newsCurrentIndex < newsTotalCards - newsCardsPerView) {
    newsCurrentIndex++;
  } else {
    newsCurrentIndex = 0;
  }
  newsUpdateSlider();
});

newsPrevBtn.addEventListener('click', () => {
  if (newsCurrentIndex > 0) {
    newsCurrentIndex--;
  } else {
    newsCurrentIndex = newsTotalCards - newsCardsPerView - 2;
  }
  newsUpdateSlider();
});

window.addEventListener('resize', newsUpdateSlider);
window.addEventListener('load', newsUpdateSlider);
