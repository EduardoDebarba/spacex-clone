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