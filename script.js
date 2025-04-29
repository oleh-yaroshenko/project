// нижче буде код секції modal (щоб показуалась модалка з різними цінами при натисканні кнопки) (секція Олега)



// нижче буде код секції timer (щоб був таймер в реальному часі) (секція Олега)



// нижче буде код секції header (щоб було бургер меню) (секція Назара)



// нижче буде код секції trailer (щоб відкривалася модалка при натисканні на кнопку з відео ютуб) (секція Міші)



// нижче буде код секції series (щоб працювали switch оператори і мінявся текст 2 секцій відповідно) (секція Марка)
const toggleSwitch = document.getElementById('toggleSwitch');
const minOption = document.getElementById('minOption');
const recOption = document.getElementById('recOption');
const body = document.body;

let isActive = false;

function toggleState() {
    isActive = !isActive;
    
    // Update switch appearance
    toggleSwitch.classList.toggle('active', isActive);
    
    // Update option styles
    minOption.classList.toggle('active', !isActive);
    recOption.classList.toggle('active', isActive);
    
    // Change body background color
        let rectangleP1 = document.querySelector(`.boy-text-p1`)
        let rectangleP3 = document.querySelector(`.boy-text-p3`)
        let rectangleP4 = document.querySelector(`.boy-text-p4`)
        let rectangleP8 = document.querySelector(`.boy-text-p8`)
    if (isActive) {
        rectangleP1.textContent = `: Intel i5-2500k or AMD Ryzen 5 1200`
        rectangleP3.textContent = `: Windows 11 64-bit`
        rectangleP4.textContent = `: NVIDIA GTX 1060 (6 GB) or AMD RX 570 (4 GB)`
        rectangleP8.textContent = `: 6 GB`
    } else {
        rectangleP1.textContent = `: Intel i5-2500k or AMD Ryzen 3 1200`
        rectangleP3.textContent = `: Windows 10 64-bit`
        rectangleP4.textContent = `: NVIDIA GTX 960 (4 GB) or AMD R9 290X (4 GB)`
        rectangleP8.textContent = `: 4 GB`
    }
}


// Add click event to the switch
toggleSwitch.addEventListener('click', toggleState);

// Add click events to options
minOption.addEventListener('click', () => {
    if (isActive) {
        toggleState();
    }
});

recOption.addEventListener('click', () => {
    if (!isActive) {
        toggleState();
    }
});






const toggleSwitch1 = document.getElementById('toggleSwitch1');
const minOption1 = document.getElementById('minOption1');
const recOption1 = document.getElementById('recOption1');
const body1 = document.body;

let isActive1 = false;

function toggleState1() {
    isActive1 = !isActive1;
    
    // Update switch appearance
    toggleSwitch1.classList.toggle('active1', isActive1);
    
    // Update option styles
    minOption1.classList.toggle('active1', !isActive1);
    recOption1.classList.toggle('active1', isActive1);
    
    // Change body background color
        let rectangleP9 = document.querySelector(`.boy-text-p9`)
        let rectangleP13 = document.querySelector(`.boy-text-p13`)
        let rectangleP14 = document.querySelector(`.boy-text-p14`)
    if (isActive1) {
        rectangleP9.textContent = `: PS4, PS5`
        rectangleP13.textContent = `: English, Polish, Russian`
        rectangleP14.textContent = `: English, Dutch, Polish, Russian, Turkish`
    } else {
        rectangleP9.textContent = `: PS4`
        rectangleP13.textContent = `: English`
        rectangleP14.textContent = `: English`
    }
}


// Add click event to the switch
toggleSwitch1.addEventListener('click', toggleState1);

// Add click events to options
minOption1.addEventListener('click', () => {
    if (isActive1) {
        toggleState1();
    }
});

recOption1.addEventListener('click', () => {
    if (!isActive1) {
        toggleState1();
    }
});




// нижче буде код секції news (щоб працював слайдер) (секція Даші)

