const max = 20;
const min = 1;
const number = Math.floor(Math.random() * (max - min + 1)) + 1;
let score = 20;

const secretNumber = document.querySelector('.secret-number');
const body = document.querySelector('body');
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const scoreMessage = document.querySelector('.score');

check.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = '⛔ No number';
  } else if (guess === number) {
    secretNumber.textContent = number;
    message.textContent = 'Correct Number 🏆💃💃';
    body.style.backgroundColor = '#03fc6f';
    secretNumber.style.width = '15rem';
  } else if (guess > number) {
    if (score > 1) {
      score--;
      scoreMessage.textContent = score;
      message.textContent = '↗ too high!';
    } else {
      message.textContent = '😥 Game over';
      scoreMessage.textContent = 0;
    }
  } else if (guess < number) {
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
