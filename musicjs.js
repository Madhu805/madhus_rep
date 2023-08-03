const musicPlayer = document.getElementById('musicPlayer');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const skipBtn = document.getElementById('skipBtn');

playBtn.addEventListener('click', () => {
  musicPlayer.play();
  playBtn.classList.add('playing');
  container.classList.remove('paused');

});

pauseBtn.addEventListener('click', () => {
  musicPlayer.pause();
  playBtn.classList.remove('playing');
  container.classList.add('paused');

});

skipBtn.addEventListener('click', () => {
  // Replace 'path_to_next_music_file.mp3' with the path to the next music file
  musicPlayer.src = 'D:\\myyt\\Webprojects\\Musicsystem\\Her-Shubh.mp3';
  musicPlayer.play();
});

playBtn.addEventListener('mousedown', () => {
  playBtn.classList.add('pulsing');
});

playBtn.addEventListener('mouseup', () => {
  playBtn.classList.remove('pulsing');
});








skipBtn.addEventListener('mousedown', () => {
  skipBtn.classList.add('pulsing');
});

skipBtn.addEventListener('mouseup', () => {
  skipBtn.classList.remove('pulsing');
});