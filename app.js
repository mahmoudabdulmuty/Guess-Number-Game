// Generating random number
let min = 1;
let max = 20;
let number = Math.trunc(Math.random() * (max - min + 1)) + min;

const message = document.querySelector('.message');
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const again = document.querySelector('.again');

check.addEventListener('click', () => {
	const guessVal = Number(guess.value);

	guessVal !== number
		? score.textContent--
		: Number(highscore.textContent) < Number(score.textContent)
		? (highscore.textContent = score.textContent)
		: (highscore.textContent = highscore.textContent);

	guessVal === number
		? (document.body.style.backgroundColor = 'green')
		: (document.body.style.backgroundColor = 'black');

	message.textContent =
		!guessVal || guessVal < 0
			? 'No Number'
			: Number(score.textContent) <= 0
			? 'Game Over'
			: guessVal > number
			? 'Too High'
			: guessVal < number
			? 'Too Low'
			: 'Correct Number';

	score.textContent = Number(score.textContent) <= 0 ? 0 : score.textContent;
});

again.addEventListener('click', () => {
	min = 1;
	max = 20;
	number = Math.trunc(Math.random() * (max - min + 1)) + min;

	message.textContent = 'Start guessing ...';
	score.textContent = 20;
	document.body.style.backgroundColor = 'black';
	guess.value = '';
});
