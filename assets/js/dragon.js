function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateValue(document.getElementById("value1"), 0, 49, 1500);
            animateValue(document.getElementById("value2"), 0, 43, 1500);
            animateValue(document.getElementById("value3"), 0, 28, 1500);
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(animateOnScroll, { threshold: 0.5 });
observer.observe(document.querySelector(".dragon-flights"));

function playVideo(event) {
    event.stopPropagation();
    document.getElementById("videoContainer").style.display = "block";
    document.getElementById("youtubeVideo").src = "https://www.youtube.com/embed/xjSb_b4TtxI?si=P1o-rQZgw7xpaz2h?autoplay=1";

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