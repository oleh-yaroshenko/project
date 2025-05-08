// нижче буде код секції modal (щоб показуалась модалка з різними цінами при натисканні кнопки) (секція Олега)



// нижче буде код секції timer (щоб був таймер в реальному часі) (секція Олега)



// нижче буде код секції header (щоб було бургер меню) (секція Назара)



// нижче буде код секції trailer (щоб відкривалася модалка при натисканні на кнопку з відео ютуб) (секція Міші)
const playButton = document.querySelector('.trailer-play-button')
const videoOverlay = document.getElementById('trailer-video-overlay')

let videoOpen = false;

playButton.addEventListener('click', () => {
if (!videoOpen){
    videoOverlay.innerHTML = `
  <iframe src="https://www.youtube.com/embed/K0u_kAWLJOA?autoplay=1"
                allow="autoplay; fullscreen"
                allowfullscreen>
        </iframe>`;
        videoOverlay.style.display = 'flex';
        videoOpen = true;
}
else {
videoOverlay.innerHTML = '';
videoOverlay.style.display = 'none';
videoOpen - false;
}
});
// нижче буде код секції series (щоб працювали switch оператори і мінявся текст 2 секцій відповідно) (секція Марка)



// нижче буде код секції news (щоб працював слайдер) (секція Даші)

