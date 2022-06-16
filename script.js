'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log((document.querySelector('.guess').value = 30));
*/

let SecretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(SecretNumber);

let score = 20;
let highScore = 0;

// Creating a function to replace all doc.que('.message).texCon;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

function styleChange(stylist) {
  document.querySelector('body').style.backgroundColor = stylist;
}

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Input a number';

    // When player wins
  } else if (guess === SecretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number';
    displayMessage('Correct number');
    // document.querySelector('body').style.backgroundColor = 'Green'; // or'#60b347';
    styleChange('Green');
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = guess;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== SecretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > SecretNumber ? 'Guess too high ⚡' : 'Guess too low 🔅';

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game over, you lost';
      document.querySelector('.score').textContent = 0;
    }
    // when guess is too low
  }

  //   else if (guess < SecretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Guess too low 🔅';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'Game over, you lost';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(SecretNumber);
});
