'use strict';
// Today, We Will Implement The Highscores Feature For Our Game,
// So Whenever The Player Wins, The Amount Of Tries They Took,
// Will Be Set As Their Highscore, And If They Win Again In Less Tries,
// That Will Set To Be Their New Highscore,
// So Lets Do As Such, We Will Creat A New Variable Called highscore,
// And We Start It As 0, Because The Highscore Will Always Be Greater Than Zero,
// And We Set It, To The Scenario Where The Player Wins The Game,
const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When There Is No Input,
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';

    // When Player Wins,
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = number;

    document.querySelector('body').style.backgroundColor = '#60b347'; // <-- Where We Select The Body Using The "body" Element, And Change The CSS Style,
    document.querySelector('.number').style.width = '30rem'; // <-- Where We Increase The Width Of The Number Box,

    if (score > highscore) { // <-- Where We Set The Highscore,
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When Guess Is Too High,
  } else if (guess > number) {

    if (score > 1) {
      document.querySelector('.message').textContent = '📈Too High!';
      score = score - 1; // Or Score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game!';
      document.querySelector('.score').textContent = 0;
    }

    // When Guess Is Too Low,
  } else if (guess < number) {

    if (score > 1) {
      document.querySelector('.message').textContent = '📈Too High!';
      score = score - 1; // Or Score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game!';
      document.querySelector('.score').textContent = 0;
    }
    document.querySelector('.message').textContent = '📉Too Low!';
    score = score - 1; // Or Score--;
    document.querySelector('.score').textContent = score;
  }
});
// And We Use The .highscore Class, And We Know What We Do After That,
// So That Was Basically All There Was, This Was, Really Short😅,
// Anyways, In The Next Subrepo, We Will Clean This Code Up,
// And Make It More Efficient, Aswell As Removing Any Duplicate Code,
// But For Now, Keep Practicing, Keep Researching, And Happy Coding🚀!


