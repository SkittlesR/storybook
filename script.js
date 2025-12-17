// Появление страницы
window.onload = () => {
  document.querySelector(".spread").classList.add("visible");
};

// Анимация волшебных элементов (float + glow)
const magicElements = document.querySelectorAll(".magic");
magicElements.forEach(el => {
  setInterval(() => {
    const dx = (Math.random() - 0.5) * 10; // движение X
    const dy = (Math.random() - 0.5) * 10; // движение Y
    const opacity = 0.7 + Math.random() * 0.3; // мерцание
    el.style.transform = `translate(${dx}px, ${dy}px)`;
    el.style.opacity = opacity;
  }, 800);

  // Клик → звук и лёгкое увеличение
  const audio = new Audio('sounds/click.mp3');
  el.addEventListener("click", () => {
    el.style.transform += ' scale(1.2)';
    audio.currentTime = 0;
    audio.play();

    setTimeout(() => {
      el.style.transform = el.style.transform.replace(' scale(1.2)', '');
    }, 300);
  });
});
