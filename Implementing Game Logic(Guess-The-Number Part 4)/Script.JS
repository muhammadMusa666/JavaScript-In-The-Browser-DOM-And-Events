'use strict';
// Today We Will Just Continue Building Our Game, And Implement The Game Logic,
// And This Is Part 4 Of This Game, Anyways, Lets Continue,
// So, By Implementing Game Logic, I Mean Imeplementing The Way How The Game Works,
// And For Now We Need To Do This, 
// So What Happens When The Guess Is Correct,
// We Also Need To Implement When The Guess Is Too High Or Too Low,
// Which Means We Basically Have These 3 Scenarios,
// To Start, We Need To Define The Secret Number,
// So That We Have Something To Compare The Guess Too,
// And We Define It Outside Of The Event Handler,
// Because We Only Want That Secret Number To Be Defined Once,
// So We Need Only 1 Number Which We Can Compare With The Guesses,
// Now This Is Pretty Similar To The Dice-Roll,
// That We Did In The Fundmentals Sections,
// So Again We Use Math.random(), Which Gives A Number Between 0 And 1,
// And If We Want It To Be Between 1 And 20, We Multiply It By 20,
// Then We Get A Decimal Number That Ranges Between 0 And 20,
// And We Can Use Math.trunc() To Remove The Decimal Part Since Its Just Noise,

// Now After That We Obviously Have To Hide Our Secret Number,
// Which Should Be  Behind The Question Mark,
// But Since We're Still In Development,
// We'll Just Display It So We Can Test Our Game Logic As We Develop It,
// We Already Know How It Works And Did It Before, So I Dont Really Need To Explain,
const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct Number!';
  } else if (guess > number) {

    if (score > 1) {
      document.querySelector('.message').textContent = '📈Too High!';
      score = score - 1; // Or Score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game!';
      document.querySelector('.score').textContent = 0;
    }
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
// Now That Thats Done, We Check It By Reloading The Page,
// Or Simply Saving From VS Code If Your Using Live-Server Like Me,
// And It Shows Different Random Numbers,
// So Lets Move On, And Let Compare The Secret Number With The User's Guess,
// And To Do So, We Modify The if-else Statement,
// To See What Happens When The Guess Is Same As The Secret Number,
// And Then We Add The Correct Number Message,

// Now That We Added The Correct Number Message,
// We Can Now Check If The Guess Is Too High Or Too Low,
// So We Again Modify The if-else Statement,
// To Add The Too High And Too Low Messages,

// And With This, We Have Covered All The Scenarios,

// Now We Have More To Do, So, We Need To Change The Score As We Do The Guesses,
// So If The Guess Does Not Match, The Score Decreases, And Stops When It Matches,
// Then It Gets Set Has The High Score, So Lets Do That,
// And We Can Do It In 2 Ways, Th First Way Is To Read The Score From Here,
// Then Decrease It By One, Then Print It Again,
// BUT, There Is A Better Way, Which Is To Create A Variable,
// For The Score In The Code, And Then Update/Decrease That Variable As We Move On,
// And By Doing That, We Have Data In The Both The Code And The DOM,
// And Thats Always Good, And Thats Why I Did It Before The Secret Number,
// And After The Math.trunc() Method, 
// So There The let score = 20; Line Of Code,
// And Dont Forget, We Use let Instead Because The Value Will Be Changing,
// Then We Go To The 2 Wrong Guess Scenarios,
// And We Decrease The Score By One,
// Then We Select the Class Of Score Like We Did To The Other Classes,

// And Again, Dont Always Rely On The DOM To Get The Data,
// Because It Can Be Manipulated, And It Can Be Changed,
// So Its Better To Have The Data In The Code Aswell,
// And Then Update The DOM With The Data From The Code,
// So That Is Why We Did It This Way,

// Now, There Is Another Thing, If We Keep On Decreasing The Score By Wrong Guesses,
// It Will Go Below Zero And Never End,
// And To Fix It, We Can Say, That Everything In The Wrong Scenarios,
// Should Only Happen When The Score Is Greater Than One,
// So We Do It By Adding An if Statement,
// In The Already Large if-else Block Of Code😅,
// Also, We Are Creating Alot Of Duplicate Code,
// Which We Will Fix At The End Of This Project,

// Now This Was All For This Part And Subrepo, 
// In The Next Part We Will Fix And Do Stuff With The Highscore,
// And The Play Again Button, Aswell As Talk A Little Bit About CSS,
// Where We Will See And Learn How To Manipulate Styles In JavaScript,
// And Until Then, Keep Coding, Keep Practicing, Keep Researching And Exploring🚀,
// Happy Coding🫡.













