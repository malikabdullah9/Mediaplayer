
const playAllButton = document.getElementById('play-all-btn');

const audioElements = document.querySelectorAll('audio');

let currentPlayingIndex = 0;
let isPlayingAll = false; 
function playAllSongs(index = 0) {
  if (index >= audioElements.length) {
    isPlayingAll = false; 
    playAllButton.textContent = "Play All"; 
    return;
  }

  const currentAudio = audioElements[index];
  currentAudio.play();
  
  currentAudio.onended = () => playAllSongs(index + 1);
}


playAllButton.addEventListener('click', () => {
  if (!isPlayingAll) {
    
    playAllButton.textContent = "Pause All"; 
    isPlayingAll = true;
    playAllSongs(); 
  } else {
    
    audioElements.forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });
    playAllButton.textContent = "Play All"; 
    isPlayingAll = false;
  }
});
