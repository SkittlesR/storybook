// Появление разворота
window.onload = () => {
  document.querySelectorAll(".spread").forEach(spread => {
    spread.classList.add("visible");
  });
};

// Клик по бабочкам
const butterflies = document.querySelectorAll(".magic-butterfly");
butterflies.forEach(butterfly => {
  const audio = new Audio('sounds/click.mp3');

  butterfly.addEventListener("click", (e) => {
    // останавливаем всплытие, чтобы клик не срабатывал на фоне
    e.stopPropagation();

    // эффект увеличения
    butterfly.style.transform = 'scale(1.05)';

    // звук
    audio.currentTime = 0;
    audio.play();

    // возвращаем масштаб
    setTimeout(() => { butterfly.style.transform = 'scale(1)'; }, 300);
  });
});
