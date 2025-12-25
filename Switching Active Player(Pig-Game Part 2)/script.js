'use strict';
// Elements Selection:
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');  
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Conditions:
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0; // 0 For Player 1, 1 For Player 2,

// Today, We Will Be Switching The Active Player, Whenever A Player Rolls A 1,
// So, As We Know, Whenever The Players Rolls A 1,
// We Will Enter The else Block, And The Current Score Should Reset To 0,
// Then The Current Dice Value Will Be Added To The Current Score,
// And When Its Not A 1, Then The Dice Value Will Be Added To The Current Score,
// Now, Previously, We Implemented The Rolling Dice Functionality,
// Only With Player0, But Now We Will Do So With Both Players,
// Thats Why I Wrote The "CHANGE LATER" Comment In The Previous Subrepo,
// So, In Order To Do That, We Need To Keep Track Of The Active Player,
// To Do So, We Will Create A Variable Called activePlayer,
// Now, I Will Be Adding That New Variable, After The currentScore Variable,
// We Will Also, Store The Scores Of Both Players In An Array,
// Creating A scores Array, And Initialize It With 0,0,
// These Scores, Are The Total Scores, Not The Current Scores,
// I Have Written This Array Above The currentScore Variable,
// We Will See This In Action In The Next Subrepo,
// But For Now, We Will Just Focus On Switching The Active Player,
// Which Will Be Important To Display The Current Score,
// For The Active Player Only, And Not Just For Player 0,
// And Instead Of Manipulating The Current Score Of Player 0,
// Lets Select The Element Dynamically,
// By Writing "document.getElementById()",
// Below The "currentScore += dice" Line,
// Now, We Need The Class Name, Which Will Either Be current--0 Or current--1,
// You Can Probably See Now, Why We Need The activePlayer Variable,
// Because We Can Basically Build These Class Names,
// And By Using Template Literals, We Can Do That Easily,
btnRoll.addEventListener('click', function () {
    // 1. Generating A Random Dice Roll,
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display Dice,
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check For Rolled 1:
    if (dice !== 1) {
        // Add Dice To Current Score,
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        // Switch To Next Player,
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
        
    }
});
// So, We Will Write document.getElementById(`current--${activePlayer}`),
// This Way, When activePlayer Is Either Player 0 Or Player 1,
// It Will Select The Respective Player's Current Score Element,
// Then With .textContent, We Can Update The Current Score,
// Now, When We Switch The Player, We Will Of Course,
// Need To Change The activePlayer Value, From Zero To One, Or From One To Zero,
// And We Do So, By Using The Ternary Operator In The else Block,
// Now, If We Run This Code, It Should Mostly Work, Except For,
// The Current Score Doesnt Reset, And When The Next Player Rolls A Non-1,
// The Current Score Continues From The Previous Player's Score,
// And The Lighter Color Doesnt Switch To The Next Player,
// So Lets Fix These, By Resetting The Current Score To 0,
// First, In The else Block, After Switching The activePlayer,
// We Will Set currentScore = 0, So The Current Score Resets Before We Do The Switch,
// We Will Also Write document.getElementById(`current--${activePlayer}`).textContent = 0;
// This Will Set The Current Score Display Of The New Active Player To 0,
// Now Lastly, We Need To Handle The Light Background Color Switch,
// For That, We Will Take A Look Into Our HTML,
// Where The First Player Section Has The player--active Class By Default,
// And When We Switch, We Want To Move That Class From player--0 To player--1,
// So As Always, We Will Start By Selecting Both Player Sections,
// I Have Written Them In The Elements Selection Section Above,
// After This, We Will Change Their Class Names,
// And Now, I Will Show You Another Method Thats Available,
// On The ClassList Property, Which Is The toggle() Method,
// Which Will Add The Class If It's Not There,
// And If It Is There, It Will Remove It,
// Now We Can Check Manually If The Class Is There Or Not,
// But toggle Is A Way Quicker And Better Way To Do So,
// And Is Better Practice To Use It Instead, Because It Can Help With Large Code,
// Aswell As Make Your Code Cleaner, But Thats Your Choice And Your Coding Style😉,
// So Now, If You Run Your Code, It Will Work Perfectly Fine,
// We Just Have To Make The Hold And Adding To The Total Score Functionalities Now,
// And Thats For The Next Subrepo, Since This Was Pretty Long😅,
// Please Practice And Analyze This Code Well, Research On It📈,
// And More Functionalities Related To It🚀,
// Which Will Help You In The Future When We Learn More About New Topics And Methods,
// So In The Meantime, Keep Working Hard, And Happy Coding😄💻🩵!

















