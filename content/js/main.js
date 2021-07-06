let number = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const body = document.querySelector('body');
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const again = document.querySelector('.again');

const secretNumber = value => {
  document.querySelector('.secret-number').textContent = value;
};

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const scoreMessage = message => {
  document.querySelector('.score').textContent = message;
};

const highscoreMessage = () =>{
  highscore = score;
  document.querySelector('.highscore').textContent = score;
}

const reset = () => {
  guess.value = 0;
  secretNumber('?');
  score = 20;
  displayMessage('Start guessing...');
  body.style.backgroundColor = '#000';
  scoreMessage(score);
  number = Math.floor(Math.random() * 20) + 1;
};

check.addEventListener('click', () => {
  let guessValue = Number(guess.value);
  // when user input wrong values
  if (!guessValue || guessValue < 0) {
    displayMessage('⛔ No number');
  }
  // when user wins
  else if (guessValue === number) {
    secretNumber(number);
    displayMessage('Correct Number 🏆💃💃');
    body.style.backgroundColor = '#03fc6f';
    // implementing highscore
    if (score > highscore) {
      highscoreMessage();
    }
  }
  // if guessValue is diffrent from number
  else if (guessValue !== number) {
    if (score > 1) {
      score--;
      scoreMessage(score);
      displayMessage(guessValue > number ? '↗ too high!' : '↘ too low!');
    } else {
      displayMessage('😥 Game over');
      scoreMessage(0);
    }
  }
});
// again reset button
again.addEventListener('click', () => {
  reset();
});
