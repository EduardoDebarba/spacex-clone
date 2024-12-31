document.addEventListener('DOMContentLoaded', () => {
    const navbarCollapse = document.querySelector('#navbarNav');
    const navbarToggler = document.querySelector('.navbar-toggler');

    navbarToggler.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('bg-custom');
        } else {
            navbarCollapse.classList.add('bg-custom');
        }
    });
});