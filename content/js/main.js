let number = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const secretNumber = document.querySelector('.secret-number');
const body = document.querySelector('body');
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const scoreMessage = document.querySelector('.score');
const highscoreMessage = document.querySelector('.highscore');
const again = document.querySelector('.again');

check.addEventListener('click', () => {
  let guessValue = Number(guess.value);

  if (!guessValue || guessValue < 0) {
    message.textContent = '⛔ No number';
  } else if (guessValue === number) {
    secretNumber.textContent = number;
    message.textContent = 'Correct Number 🏆💃💃';
    body.style.backgroundColor = '#03fc6f';
    if (score > highscore) {
      highscore = score;
      highscoreMessage.textContent = score;
    }
  } else if (guessValue > number) {
    if (score > 1) {
      score--;
      scoreMessage.textContent = score;
      message.textContent = '↗ too high!';
    } else {
      message.textContent = '😥 Game over';
      scoreMessage.textContent = 0;
    }
  } else if (guessValue < number) {
    if (score > 1) {
      score--;
      scoreMessage.textContent = score;
      message.textContent = '↘ too low!';
    } else {
      message.textContent = '😥 Game over';
      scoreMessage.textContent = 0;
    }
  }
});

again.addEventListener('click', () => {
  guess.value = 0;
  secretNumber.textContent = '?';
  score = 20;
  message.textContent = 'Start guessing...';
  body.style.backgroundColor = '#000';
  scoreMessage.textContent = score;
  number = Math.floor(Math.random() * 20) + 1;
});
