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

// нижче буде код секції timer (щоб був таймер в реальному часі) (секція Олега)



// нижче буде код секції header (щоб було бургер меню) (секція Назара)



// нижче буде код секції trailer (щоб відкривалася модалка при натисканні на кнопку з відео ютуб) (секція Міші)



// нижче буде код секції series (щоб працювали switch оператори і мінявся текст 2 секцій відповідно) (секція Марка)



// нижче буде код секції news (щоб працював слайдер) (секція Даші)

