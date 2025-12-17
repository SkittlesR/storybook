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
  butterfly.addEventListener("click", () => {
    butterfly.style.transform = 'scale(1.05)';
    audio.currentTime = 0;
    audio.play();
    setTimeout(() => { butterfly.style.transform = 'scale(1)'; }, 300);
  });
});
