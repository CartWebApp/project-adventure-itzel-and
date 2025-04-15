const movingBar = document.getElementById('movingBar');
const startButton = document.getElementById('startButton');
const resultDisplay = document.getElementById('result');
let intervalId;
let position = 0;
let direction = 1; // 1 = right, -1 = left
let gameActive = false;

function updateBar() {
  if (!gameActive) return;

  position += direction * 1;

  if (position >= 95) {
    direction = -1;
  } else if (position <= 0) {
    direction = 1;
  }

  movingBar.style.left = position + '%';
}

function startGame() {
  position = 0;
  direction = 1;
  movingBar.style.left = '0%';
  resultDisplay.textContent = '';
  gameActive = true;
  intervalId = setInterval(updateBar, 10);

  startButton.textContent = 'Stop';
  startButton.onclick = stopGame;
}

function stopGame() {
  clearInterval(intervalId);
  gameActive = false;

  const barLeft = position;
  const barRight = position + 5; // width of red bar
  const targetStart = 45;
  const targetEnd = 55;

  if (barLeft >= targetStart && barRight <= targetEnd) {
    resultDisplay.textContent = 'Perfect! You landed in the zone!';
  } else {
    resultDisplay.textContent = 'Missed! Try again.';
  }

  startButton.textContent = 'Restart';
  startButton.onclick = startGame;
}

startButton.onclick = startGame;

//diaable clicking to the next page