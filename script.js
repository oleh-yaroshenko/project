// нижче буде код секції modal (щоб показуалась модалка з різними цінами при натисканні кнопки) (секція Олега)

const modalCardnumberInput = document.getElementById('modal-cardnumber');

modalCardnumberInput.addEventListener('input', () => {
    let value = modalCardnumberInput.value.replace(/\D/g, '');
    value = value.substring(0, 16);

    let formatted = value.match(/.{1,4}/g);
    if (formatted) {
        modalCardnumberInput.value = formatted.join(' ');
    } else {
        modalCardnumberInput.value = '';
    }
});

const modalDateInput = document.getElementById('modal-date');

modalDateInput.addEventListener('input', () => {
    let value = modalDateInput.value.replace(/\D/g, '');
    value = value.substring(0, 4);

    if (value.length >= 3) {
        modalDateInput.value = `${value.slice(0, 2)}/${value.slice(2)}`;
    } else if (value.length >= 1) {
        modalDateInput.value = value;
    }
});

const modalCvvInput = document.getElementById('modal-cvv');

modalCvvInput.addEventListener('input', () => {
    let value = modalCvvInput.value.replace(/\D/g, '');
    value = value.substring(0, 3);
    modalCvvInput.value = value;
});

const modalNameInput = document.getElementById('modal-name');

modalNameInput.addEventListener('input', () => {
    let value = modalNameInput.value.replace(/[^a-zA-Z\s]/g, '');
    modalNameInput.value = value;
});

const modalBackdrop = document.querySelector(".modal-backdrop")
const modalPriceSpan = document.querySelector(".modal-form-price-amount")
const modalClose = document.querySelector(".modal-form-close")
const modalOpenBtns = document.querySelectorAll(".modal-open")

modalOpenBtns.forEach(button => {
    button.addEventListener('click', () => {
        const price = button.getAttribute('data-modal-price');
        modalPriceSpan.textContent = `${price}$`;
        modalBackdrop.classList.remove('hidden');
    });
});

modalClose.addEventListener('click', () => {
    modalBackdrop.classList.add('hidden');
});

// нижче буде код секції timer (щоб був таймер в реальному часі) (секція Олега)

const timerDays = document.getElementById('timer-days');
const timerHours = document.getElementById('timer-hours');
const timerMinutes = document.getElementById('timer-minutes');
const timerSeconds = document.getElementById('timer-seconds');

const timerDate = new Date('2025-05-20T00:00:00');

function updateTimer() {
    const now = new Date();
    const diff = timerDate - now;

    if (diff <= 0) {
        timerDays.textContent = '0';
        timerHours.textContent = '0';
        timerMinutes.textContent = '0';
        timerSeconds.textContent = '0';
        clearInterval(timerInterval);
        return;
    }

    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);

    timerDays.textContent = String(days).padStart(2, '0');
    timerHours.textContent = String(hours).padStart(2, '0');
    timerMinutes.textContent = String(minutes).padStart(2, '0');
    timerSeconds.textContent = String(seconds).padStart(2, '0');
}

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();

// нижче буде код секції header (щоб було бургер меню) (секція Назара)

let headerBurger = document.querySelector(".header-nav-burger")
let headerNav = document.querySelector(".header-nav-ul")

headerBurger.addEventListener("click", () => {
    headerNav.classList.toggle("hidden")
})

// нижче буде код секції trailer (щоб відкривалася модалка при натисканні на кнопку з відео ютуб) (секція Міші)

const trailerPlayButton = document.querySelector('.trailer-play-button')
const trailerVideoOverlay = document.getElementById('trailer-video-overlay')

let videoOpen = false;

trailerPlayButton.addEventListener('click', () => {
    if (!videoOpen) {
        trailerVideoOverlay.innerHTML = `
  <iframe src="https://www.youtube.com/embed/K0u_kAWLJOA?autoplay=1"
                allow="autoplay; fullscreen"
                allowfullscreen>
        </iframe>`;
        trailerVideoOverlay.style.display = 'flex';
        videoOpen = true;
    }
    else {
        trailerVideoOverlay.innerHTML = '';
        trailerVideoOverlay.style.display = 'none';
        videoOpen - false;
    }
});

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
