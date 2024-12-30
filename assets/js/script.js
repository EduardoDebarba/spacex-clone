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