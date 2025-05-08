// нижче буде код секції modal (щоб показуалась модалка з різними цінами при натисканні кнопки) (секція Олега)



// нижче буде код секції timer (щоб був таймер в реальному часі) (секція Олега)



// нижче буде код секції header (щоб було бургер меню) (секція Назара)



// нижче буде код секції trailer (щоб відкривалася модалка при натисканні на кнопку з відео ютуб) (секція Міші)



// нижче буде код секції series (щоб працювали switch оператори і мінявся текст 2 секцій відповідно) (секція Марка)



// нижче буде код секції news (щоб працював слайдер) (секція Даші)
const track = document.querySelector('.slider-track');
const cards = document.querySelectorAll('.news-card');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const cardsPerView = 3;
const totalCards = cards.length;

function updateSlider() {
  const cardWidth = cards[0].offsetWidth + 20; 
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < totalCards - cardsPerView) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlider();
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalCards - cardsPerView;
  }
  updateSlider();
});

window.addEventListener('resize', updateSlider);
window.addEventListener('load', updateSlider);

