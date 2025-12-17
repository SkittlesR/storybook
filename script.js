window.onload = () => {
  document.querySelector(".spread").classList.add("visible");
};

const scene = document.getElementById("scene");

scene.addEventListener("click", () => {
  scene.classList.add("active");

  setTimeout(() => {
    scene.classList.remove("active");
  }, 300);
});
