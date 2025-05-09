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



// нижче буде код секції trailer (щоб відкривалася модалка при натисканні на кнопку з відео ютуб) (секція Міші)



// нижче буде код секції series (щоб працювали switch оператори і мінявся текст 2 секцій відповідно) (секція Марка)



// нижче буде код секції news (щоб працював слайдер) (секція Даші)

