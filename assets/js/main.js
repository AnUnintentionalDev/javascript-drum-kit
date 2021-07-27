function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  
  const key = document.querySelector(`.key-wrapper[data-key="${e.keyCode}"]`);;

  if (!audio) {
    return;
  }

  audio.currentTime = 0;
  audio.play();
  key.classList.add('key-playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') {
    return;
  }

  this.classList.remove('key-playing');
}

const keys = document.querySelectorAll('.key-wrapper');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);