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

document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const header = document.querySelector(".header");
    const navbar = document.querySelector(".navbar");

    navbarToggler.addEventListener("click", function () {
        header.classList.toggle("active");
        navbar.classList.toggle("active");
    });
});