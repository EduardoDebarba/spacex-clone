const video = document.getElementById('video');
const tempoMaximo = 20;

video.addEventListener('loadedmetadata', () => {
  video.currentTime = 0;
});

video.addEventListener('timeupdate', () => {
  if (video.currentTime >= tempoMaximo) {
    video.currentTime = 0;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const header = document.querySelector(".header");
  const navbar = document.querySelector(".navbar");

  navbarToggler.addEventListener("click", function () {
    header.classList.toggle("active");
    navbar.classList.toggle("active");
  });
});