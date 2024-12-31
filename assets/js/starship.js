function playVideo(event) {
    event.stopPropagation();
    document.getElementById("videoContainer").style.display = "block";
    document.getElementById("youtubeVideo").src = "https://www.youtube.com/embed/921VbEMAwwY?si=Hn_ZiAR-QY71IN27?autoplay=1";
}

function closeVideo(event) {
    event.stopPropagation();
    document.getElementById("videoContainer").style.display = "none";
    document.getElementById("youtubeVideo").src = "";
}

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