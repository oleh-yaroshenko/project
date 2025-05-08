// нижче буде код секції modal (щоб показуалась модалка з різними цінами при натисканні кнопки) (секція Олега)



// нижче буде код секції timer (щоб був таймер в реальному часі) (секція Олега)



// нижче буде код секції header (щоб було бургер меню) (секція Назара)



// нижче буде код секції trailer (щоб відкривалася модалка при натисканні на кнопку з відео ютуб) (секція Міші)



// нижче буде код секції series (щоб працювали switch оператори і мінявся текст 2 секцій відповідно) (секція Марка)

const seriestoggleSwitch = document.getElementById('series-toggleSwitch');
const seriesminOption = document.getElementById('series-minOption');
const seriesrecOption = document.getElementById('series-recOption');
const seriesbody = document.body;

let seriesisActive = false;

function seriestoggleState() {
    seriesisActive = !seriesisActive;
    seriestoggleSwitch.classList.toggle('series-active', seriesisActive);
    seriesminOption.classList.toggle('series-active', !seriesisActive);
    seriesrecOption.classList.toggle('series-active', seriesisActive);

    let seriesrectangleP1 = document.querySelector(`.series-boy-text-p1`)
    let seriesrectangleP3 = document.querySelector(`.series-boy-text-p3`)
    let seriesrectangleP4 = document.querySelector(`.series-boy-text-p4`)
    let seriesrectangleP8 = document.querySelector(`.series-boy-text-p8`)
    if (seriesisActive) {
        seriesrectangleP1.textContent = `: Intel i5-2500k or AMD Ryzen 5 1200`
        seriesrectangleP3.textContent = `: Windows 11 64-bit`
        seriesrectangleP4.textContent = `: NVIDIA GTX 1060 (6 GB) or AMD RX 570 (4 GB)`
        seriesrectangleP8.textContent = `: 6 GB`
    } else {
        seriesrectangleP1.textContent = `: Intel i5-2500k or AMD Ryzen 3 1200`
        seriesrectangleP3.textContent = `: Windows 10 64-bit`
        seriesrectangleP4.textContent = `: NVIDIA GTX 960 (4 GB) or AMD R9 290X (4 GB)`
        seriesrectangleP8.textContent = `: 4 GB`
    }
}

seriestoggleSwitch.addEventListener('click', seriestoggleState);

seriesminOption.addEventListener('click', () => {
    if (seriesisActive) {
        seriestoggleState();
    }
});

seriesrecOption.addEventListener('click', () => {
    if (!seriesisActive) {
        seriestoggleState();
    }
});

const seriestoggleSwitch1 = document.getElementById('series-toggleSwitch1');
const seriesminOption1 = document.getElementById('series-minOption1');
const seriesrecOption1 = document.getElementById('series-recOption1');
const seriesbody1 = document.body;

let seriesisActive1 = false;

function seriestoggleState1() {
    seriesisActive1 = !seriesisActive1;
    seriestoggleSwitch1.classList.toggle('series-active1', seriesisActive1);
    seriesminOption1.classList.toggle('series-active1', !seriesisActive1);
    seriesrecOption1.classList.toggle('series-active1', seriesisActive1);

    let seriesrectangleP9 = document.querySelector(`.series-boy-text-p9`)
    let seriesrectangleP13 = document.querySelector(`.series-boy-text-p13`)
    let seriesrectangleP14 = document.querySelector(`.series-boy-text-p14`)
    if (seriesisActive1) {
        seriesrectangleP9.textContent = `: PS4, PS5`
        seriesrectangleP13.textContent = `: English, Polish, Russian`
        seriesrectangleP14.textContent = `: English, Dutch, Polish, Russian, Turkish`
    } else {
        seriesrectangleP9.textContent = `: PS4`
        seriesrectangleP13.textContent = `: English`
        seriesrectangleP14.textContent = `: English`
    }
}

seriestoggleSwitch1.addEventListener('click', seriestoggleState1);

seriesminOption1.addEventListener('click', () => {
    if (seriesisActive1) {
        seriestoggleState1();
    }
});

seriesrecOption1.addEventListener('click', () => {
    if (!seriesisActive1) {
        seriestoggleState1();
    }
});

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
