function playVideo(event) {
    event.stopPropagation();
    document.getElementById("videoContainer").style.display = "block";
    document.getElementById("youtubeVideo").src = "https://www.youtube.com/embed/Z4TXCZG_NEY?autoplay=1";
}

function closeVideo(event) {
    event.stopPropagation();
    document.getElementById("videoContainer").style.display = "none";
    document.getElementById("youtubeVideo").src = "";
}

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
            animateValue(document.getElementById("value1"), 0, 389, 2000);
            animateValue(document.getElementById("value2"), 0, 344, 2000);
            animateValue(document.getElementById("value3"), 0, 320, 2000);
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(animateOnScroll, { threshold: 0.5 });
observer.observe(document.querySelector(".falcon-flights"));

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