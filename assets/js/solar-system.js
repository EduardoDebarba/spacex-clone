// document.addEventListener('DOMContentLoaded', () => {
//     const navbarCollapse = document.querySelector('#navbarNav');
//     const navbarToggler = document.querySelector('.navbar-toggler');

//     navbarToggler.addEventListener('click', () => {
//         if (navbarCollapse.classList.contains('show')) {
//             navbarCollapse.classList.remove('bg-custom');
//         } else {
//             navbarCollapse.classList.add('bg-custom');
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const header = document.querySelector(".header");
    const navbar = document.querySelector(".navbar");

    navbarToggler.addEventListener("click", function () {
        header.classList.toggle("active");
        navbar.classList.toggle("active");
    });
});

