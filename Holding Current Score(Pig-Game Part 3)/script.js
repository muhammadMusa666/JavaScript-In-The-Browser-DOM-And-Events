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
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// Rolling Dice Functionality:
btnRoll.addEventListener('click', function () {
    if(playing) {
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
            // document.getElementById(`current--${activePlayer}`).textContent = 0;
            // activePlayer = activePlayer === 0 ? 1 : 0;
            // currentScore = 0;
            // player0El.classList.toggle('player--active');
            // player1El.classList.toggle('player--active');
            switchPlayer();
        }
    }
});

// Today, We Will Be Implementing The Hold Functionality,
// Which Will Add The Current Score To The Total Score Of The Active Player,
// And Then Switch To The Next Player, We Can Take A Look At Our Flowchart Again,
// So, The "User Holds Score" Problem, Is What We Will Be Solving Today,
// The Green Parts/Squares After That, Will Be Our Subproblems,
// To Solve The Main Problem, Which Is Making The Holding Functionality,
// Now, After The Score Is Held, We Need To Check If The Player's Score Is >= 100,
// I Hope You Understand The ">=", Anyways, If It Is,Then The Current Player Wins,
// And If It Isnt, Then We Switch To The Next Player,
// So Now That We Know Our Main Objectives, Lets Begin:

// So, We Want Something To Happen, When The Hold Button Is Clicked,
// And To Do That, We Will Add An Event Handler To The Hold Button,
btnHold.addEventListener('click', function () {
    if(playing) {
        // 1. Add Current Score To Active Player's Score,
        scores[activePlayer] += currentScore; // <-- This Is Like This: scores[1] = scores[1] + currentScore If The Active Player Is 1,
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    
        // 2. Check If Player's Score Is >= 100,
        if (scores[activePlayer] >= 100) {
            // Finish The Game,
            playing = false;
            diceEl.classList.add('.hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            // Switch To The Next Player,
            switchPlayer();
        }
    }
});
// We Will Start By Defining The Current Player's Score,
// And Use The activePlayer Variable To Get The Correct Score Of The Current Player,
// After Changing The Score, We Will Need To Display It Aswell,
// So It Will Be Similar To Switch Player, Where We Updated,
// The Current Score Display, And Now, It Should Mostly Work,
// Except We Are Not Switching When We Hold The Score,
// And We Are Not Checking If The Score Is >= 100,
// So, Lets Leave The Checking For >= 100 For The End,
// And First, We Will Implement The Switching To The Next Player,
// Since It Is Similar To The Switching We Did Earlier When The Player Rolls A 1,
// We Will Need It Again, And Will Just Copy It Down Here,
// Nuh-Uh, You Know What We've Learnt Before😉, The DRY Principle,
// So We Wont Just Simply Copy It As We Know😊,
// And Now, We Will Create A Function For Switching Players,
// Which Will Be Used In Both Places Where We Need To Switch Players,
// So, I Will Copy The Code From The Else Block,
// And Instead Comment Out The Code There, So You Know Where It Was Initially,
// Then, I Will Create A New Function Called switchPlayer,
// Where I Will Paste The Code, This Code Is Located Below The Starting Conditions,
// Above The Rolling Dice Functionality, Or,
// Below The activePlayer Variable Declaration, I Hope You Understand, This Replacement,
// And Dont Get Confused😅, Now That Thats Done,
// Also, Just So You Know, Most Refactoring Happens,
// With Some Small Changes In The Code, Thats Why We Add Parameters,
// So That When We Call The Function, We Can Specify What Changes,
// But This Time, Nothing Changes, So Dont Worry😄,
// Now, We Can Simply Call The switchPlayer Function,
// In The Else Block Where We Had The Code Initially Commented Out,
// And In The Hold Button Event Handler Aswell,
// So Now, If We Run The Game, Everything Should Work As Expected,
// Except For The Winning Condition, Which We Will Implement Now,
// By Using An If Statement To Check If The Active Player's Score Is >= 100,
// And If So, We Will Finish The Game, With That,
// We Will Use The 'player--winner' Class To Style The Winning Player,
// And To Remove The Active Player Class, So We Will Pretty Much Do The Same,
// With The player--active Class As We Did With The player--winner Class Before,
// Also, We Will Make An Else Block Below The If Statement,
// Where We Will Call The switchPlayer Function,
// Now It Works As Expected, But, We Will Still Need To Remove The Dice, And Buttons,
// And The Best Way To Solve This, We Need To Create A Variable,
// That Hosts The State Of The Game, So If We Are Still Playing Or Not,
// So, This Is Gonna Be A State Variable, Which Kind Of,
// Tells Us The Condition Of A System, And In This Case, It Will Be,
// "Is The Game Playing Or Not?", And If It Is, Then We Can Click The Buttons,
// But, If The Game Is Finished, We Will Say The Game Is No Longer Playing,
// And We Can No Longer Play These Buttons, So, Lets Implement This Functionality,
// I Will Be Making A playing Variable At The End Of The Starting Conditions,
// Which Will Be A Boolean Value, And Set To true,
// So When We Finish The Game, It Will Be Set To false,
// Now, We Will Add It In The If Statement,
// As We Know, It Wont Do Anything By Itself,
// We Only Defined Wether The Game Is Playing Or Not,
// But None Of Our Code Is Reacting To It,
// And We Have To Make The Buttons Clickable Only When We Are Playing
// So Lets Define That, To Make It Work,
// We Will Go To The btnRoll, Which Is The First Button,
// And Make The Logic Executable Only If We Are Playing,
// To Do So, We Will Put In Inside An If Statement,
// Now That Thats Done, We Will Do The Same With The Other Button,
// So, We Will Now Hide The Dice, Using The Same .hidden Class,
// It Should Work Perfectly Now, Just So You Know,
// These State Variables Are Ususal And Common In Programming,
// And Can Be Used In Building Fun Game Projects Like This,
// Which Is A Good Way To Keep Your Curiosity And Motivation Of Learning How To Code😉,
// I Mean, Building A Portfolio Website VS A Game Type Project📈,
// We Can See Which One Would Be More Fun To Build😅,
// So, This Was All For Today, This Really Long,
// And I Hope You Could Understand Most Things,
// Sorry For The Inconvenience Of The Code If You Feel Like It😔,
// But Anyways, I Still Have No Doubts, Since You Made It Here,
// You Can Learn And Pass This Easily, So No Worries,
// Like I Said Before, Only A Few Could Make It Here🚀,
// And Your One Of Them, So If Your Reading This, Then You've Done This Aswell😎,
// Well Hopefully At Least, In The Meantime, Take A Well Deserved Break☕,
// I'll Be Seeing You In The Next Subrepo🫡, So Until Then,
// Keep Practicing, Analyzing And Researching, And Happy Coding😄💻🩵!


