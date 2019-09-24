const gameWindow = document.getElementById('game-window')
let rotate = 90
let leftPos = 200
let topPos = 0
let bottomLimit = 760

const handleKeyDown = (e) => {
  const active = document.querySelector('.active')
  switch (e.code) {
    case 'ArrowLeft':
      if (leftPos !== 0) {
        leftPos -= 40
        active.style.left = `${leftPos}px`
      }
      break;
    case 'ArrowRight':
      if (leftPos !== 360) {
        leftPos += 40
        active.style.left = `${leftPos}px`
      }
      break;
    case 'ArrowDown':
      if (topPos !== bottomLimit) {
        topPos += 40
        active.style.top = `${topPos}px`
      } else {
        active.classList.remove('active')
      }
      break;
    case 'Space':
      active.style.transform = `rotate(${rotate}deg)`
      rotate += 90
      break;
  }
}

window.addEventListener('keydown', handleKeyDown)

