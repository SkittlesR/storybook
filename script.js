// Появление страницы
window.onload = () => {
  document.querySelector(".spread").classList.add("visible");
};

// Звук и анимация бабочки при клике
const butterflies = document.querySelectorAll(".magic-butterfly");

butterflies.forEach(butterfly => {
  const audio = new Audio('sounds/click.mp3');

  butterfly.addEventListener("click", () => {
    // небольшой эффект увеличения
    butterfly.style.transform = 'scale(1.2)';
    audio.currentTime = 0;
    audio.play();

    setTimeout(() => {
      butterfly.style.transform = 'scale(1)';
    }, 300);
  });
});
