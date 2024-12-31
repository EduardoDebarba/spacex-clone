document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const header = document.querySelector(".header");
    const navbar = document.querySelector(".navbar");

    navbarToggler.addEventListener("click", function () {
        header.classList.toggle("active");
        navbar.classList.toggle("active");
    });
});

