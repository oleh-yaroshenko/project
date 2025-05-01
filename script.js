// нижче буде код секції modal (щоб показуалась модалка з різними цінами при натисканні кнопки) (секція Олега)



// нижче буде код секції timer (щоб був таймер в реальному часі) (секція Олега)



// нижче буде код секції header (щоб було бургер меню) (секція Назара)
function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('open');
  }
  
  function buyNow() {
    alert("Redirecting to purchase...");
  }

  //падаючий сніг на хедері
  (function snow() {
    const count = 50;
    for (let i = 0; i < count; i++) {
      const snowflake = document.createElement("span");
      Object.assign(snowflake.style, {
        position: "fixed",
        top: `${Math.random() * -20}px`,
        left: `${Math.random() * 100}vw`,
        width: "6px",
        height: "6px",
        background: "white",
        borderRadius: "50%",
        opacity: Math.random(),
        pointerEvents: "none",
        zIndex: 999,
        animation: `fall ${5 + Math.random() * 5}s linear infinite`,
      });
      snowflake.style.animationDelay = `${Math.random() * 5}s`;
      document.body.appendChild(snowflake);
    }
  
    const style = document.createElement("style");
    style.textContent = `
      @keyframes fall {
        to {
          transform: translateY(100vh);
        }
      }
    `;
    document.head.appendChild(style);
  })();
  
  



// нижче буде код секції trailer (щоб відкривалася модалка при натисканні на кнопку з відео ютуб) (секція Міші)



// нижче буде код секції series (щоб працювали switch оператори і мінявся текст 2 секцій відповідно) (секція Марка)



// нижче буде код секції news (щоб працював слайдер) (секція Даші)

