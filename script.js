const cat = document.getElementById('cat');
const meow = document.getElementById('meow-sound');
const speech = document.getElementById('speech-bubble');
const wrapper = document.querySelector('.cat-wrapper');

let direction = 1;
let pos = 0;

const speechTexts = [
  "Meow~",
  "Đừng rờ tui!",
  "Tui đói á 😿",
  "Ngủ đi đừng quậy nữa!",
  "Tui là boss!",
  "Tới công chuyện rồi!",
  "Hông thích đâu nha!"
];

function moveCat() {
  const max = window.innerWidth - cat.offsetWidth;
  pos += direction * 5;

  if (pos >= max || pos <= 0) {
    direction *= -1;
    cat.style.transform = `scaleX(${direction})`;
  }

  wrapper.style.left = pos + 'px';
  requestAnimationFrame(moveCat);
}

function showSpeechBubble(text) {
  speech.textContent = text;
  speech.style.opacity = 1;

  setTimeout(() => {
    speech.style.opacity = 0;
  }, 2000);
}

function randomColor() {
  const colors = ['#ffe6e6', '#e6f7ff', '#e6ffe6', '#fff0e6', '#f0e6ff'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Hover → jump
cat.addEventListener('mouseenter', () => {
  cat.classList.add('jump');
  showSpeechBubble("Woooaa!");
  setTimeout(() => cat.classList.remove('jump'), 600);
});

// Click → meow + background change + random message
cat.addEventListener('click', () => {
  meow.currentTime = 0;
  meow.play();
  document.body.style.background = randomColor();
  const text = speechTexts[Math.floor(Math.random() * speechTexts.length)];
  showSpeechBubble(text);
});

moveCat();
