// Появление разворота
window.onload = () => {
  document.querySelectorAll(".spread").forEach(spread => {
    spread.classList.add("visible");
  });
};

// Клик по изображению
const magicLayer = document.getElementById("magic-layer");
const butterflies = magicLayer.querySelector(".magic-butterfly");
const audio = new Audio('sounds/click.mp3');

magicLayer.addEventListener("click", () => {
  // показать бабочек
  butterflies.classList.add("visible");

  // эффект лёгкого увеличения
  magicLayer.style.transform = 'scale(1.02)';

  // звук
  audio.currentTime = 0;
  audio.play();

  setTimeout(() => { magicLayer.style.transform = 'scale(1)'; }, 300);
});
