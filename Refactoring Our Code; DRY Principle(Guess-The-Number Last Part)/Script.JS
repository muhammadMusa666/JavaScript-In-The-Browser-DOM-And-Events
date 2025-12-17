'use strict';
// Today We Will Do As I Said Before, Clean Up The Code,
// So We'll Be Following The DRY Principle, So Lets Begin,
// But Before That, Let Me Give You An Example, So,
// Lets Say That We Need To Change The Message Where The Player Loses,
// Then We Would Have To Change It In Two Places, Now It Might Not Sound That Bad,
// But If We Had Tons Of More Code, It Would Become A Nightmare,
// And To Counter That, Most Developers Use The DRY Principle,
// Also As A Tip, You Can Start Off Using Duplicate Code, And Clean It Later On,
// And To Clean Things Up, It Is Called Refactoring,
// Now First, We Will Start With The Incorrect Number Scenarios,
// So Where The Player's Guess Is Too High Or Too Low,
// Now, We Dont Really Need Two Big Blocks For Each,
// Because In Both Cases, The Guess Is Not Equal To the Secret Number, Correct?
// So We Can Instead, Combine It Into A Single Block,
const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When There Is No Input,
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!'; <-- So Instead Of This Duplicate Code,
    displayMessage('No Number!'); // <-- We Use This Function, And Have Continued With The Rest,
    // When Player Wins,
  } else if (guess === number) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = number;

    document.querySelector('body').style.backgroundColor = '#60b347'; // <-- Where We Select The Body Using The "body" Element, And Change The CSS Style,
    document.querySelector('.number').style.width = '30rem'; // <-- Where We Increase The Width Of The Number Box,

    if (score > highscore) { // <-- Where We Set The Highscore,
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When Guess Is Wrong,
  } else if(guess !== number) {
    if (score > 1) {
      // document.querySelector('.message').textContent = This Will Be A Bit Different,
      //  guess > number ? '📈Too High!' : '📉Too Low!'; So Watch CLosely,
      displayMessage(guess > number ? '📈Too High!' : '📉Too Low!') // <-- Did You Get That😅? We Basically Just Copied The Entire textContent,
      score = score - 1; // Or Score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You Lost The Game!';
      displayMessage('You Lost The Game!');
      document.querySelector('.score').textContent = 0;
    }
  }
//     // When Guess Is Too High,
//   } else if (guess > number) {

//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈Too High!';
//       score = score - 1; // Or Score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You Lost The Game!';
//       document.querySelector('.score').textContent = 0;
//     }

//     // When Guess Is Too Low,
//   } else if (guess < number) {

//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈Too High!';
//       score = score - 1; // Or Score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You Lost The Game!';
//       document.querySelector('.score').textContent = 0;
//     }
//     document.querySelector('.message').textContent = '📉Too Low!';
//     score = score - 1; // Or Score--;
//     document.querySelector('.score').textContent = score;
//   }
});

// So We Will First Add A New else Block At The Scenario Where The Guess Is Too High,
// And Then We Combined Both Of The Scenarios Into A Single Block,
// Then We Say, "When Guess Is Wrong",
// Now That We've Pasted The Code In The New Block,
// We Need It To Say When The Guess Is Too High,
// Only If The Entered Guess Is Higher Than The Secret Number,
// So We Need Another Conditional To Figure If The Guess Higher Or Lower,
// And For This, I'll Be Using A Ternary Operator,
// Now That Thats Done, We Can Delete The Rest Of The else Blocks,
// But I Will Comment It Out Instead,
// And Now I Hope It Made Sense To You,

// And With This, We Merged Two Blocks Of Code Into One,
// But Sometimes, A Good Refactory Technique Is To Use Functions,
// So Another Example, Is That How Many Times We've Used document.querySelector,
// And Thats Alot Of Duplicate Code, And Whenever That Happens,
// We Can Refactor This Same Code Into A Function,
// And Then Call It In All The Places That We Have To Duplicate Code,
// So, We'll Do As Such With The textContent Messages,
// Thats Why There Is A Function Called displayMessage,
// In Our Code Above, Where We Put Our textContent And Everything,
// With The Parameter Set To Message,
// Now In Our Function Block, Where We Have Our Main Duplicated Code,
// We Will Then Set It Equal To The Message That Is Passed Into The Function,
// Then We Will Comment Out A Certain Duplicate Code,
// Where In This Case I Have Done So With The No Input Scenario,
// And Instead Wrote "displayMessage('No Number!');",
// Which The String Is The Argument, And It Will Become The Message In The Function,
// Now I Have Commented Out The Rest Of The Duplicated Code,
// And Wrote The displayMessage, So, Its Your Choice To Delete,
// The Commented Out Code If You Feel Like It Or Not,
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start Guessing...';
  displayMessage('Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
// Now, Everything Works, And It Is Much Cleaner😄,
// Also, There Is Alot More Duplicate Code Here That Needs Some Refactoring,
// But I'll Leave That Up To You, As A Mini-Challenge For This Long Subrepo😉,
// Because After Showing You All Of This, I Think You've Learnt Most...Hopefully😅,
// This Is Also The Last Part Of This Project,
// And There Is Another One Coming, So Be Ready🫡,
// Anyways, Keep Revisiting, And Analyzing The Code If Its Too Much,
// Keep Practicing And Researching On It, And Happy Coding🚀!

