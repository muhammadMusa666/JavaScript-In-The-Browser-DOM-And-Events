'use strict';
// Today, Will Be A Separate Challenge For You, And It Will Be,
// That You Implement The Functionality, For The Again Button, Yourself,
// Meaning, That You'll Have To Reset The Game, By Clicking The Again Button,
// And Since This Is Good Practice For Everything You've Learnt,
// This Is Also Part 6 Of This Project,
// I'd Say This Is The Perfect Challenge To Test It Out,
// But First, We Need To Fix A Small Problem😅,
// As You Can See, The Number Is Still Visible, And We Need To Hide It,
// And Make It Show Only When The Player Wins,
// And We Do That By Moving The .number Line Of Code,
// To The Scenario Where The Player Wins,
const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;

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

// Now, We Start The Challenge😄
// Implement A Game Reset Functionality, So That The Player,
// Can Make A New Guess, By Clicking The Again Button,
// Here Is How:
// 1: Select The Element With The 'again' Class, And Attach A Click Event Handler,
// 2: In The Handler Function, Restore Initial Values,
// Of The 'score' And 'number' Variables,
// 3: Restore The Initial Conditions Of The Message,
// Number, Score And Guess Input Fields,
// 4: Also Restore The Original Background Color (#222) And Number Width (15rem),

// Now, You Can Either Do The Challenge Below This Line,
// Or You Can Create A Separate File For It, And Do It There,
// And Dont Forget To Link It To The HTML File😉,
// Also, I Am Saying This Again, At Least Try To Do It On Your Own,
// And Dont Worry If You Didnt Get It Perfect, Or Simply Failed,
// If You've Been Following Me Along, You Know What I Always Say,
// You Cant Progress, If You Dont Fail, And Everything Cant Be Perfect,
// The Fact That You Even Tried, Let Alone Finished It Roughly,
// Is A Great Achievment, Because Many Would Have Just Cheated For The Solution,
// You Can Find The Solution For This In The answers.js File,
// But Anyways, Do Your Best, And Good Luck😄






