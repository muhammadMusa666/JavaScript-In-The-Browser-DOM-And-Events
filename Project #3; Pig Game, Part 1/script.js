'use strict';
// Welcome Back, Today, We Will Be Doing Our 3rd And Last Project,
// Which Is A Simple Pig-Game, Where Two Players Compete To Reach 100 Points First,
// Using A Dice, The Player Can Either Roll The Dice, And The Rolled Number,
// Will Add To Their Current Score, And Keep Rolling,
// Or They Can Hold Their Current Score, By Pressing The Hold Button
// And Whenever The Players Rolls A 1, Their Current Score Will Be Lost,
// Then The Turn Switches To The Other Player,
// Thats Basically It, Now We Will Start Coding It,
// There Is A Flowchart As You Can See In This SubRepo,
// Where You Will Understand What We Will Be Doing, To Make This Project Work,
// In The Meantime, You Can Open This Code In Your Browser,
// And See How It Is Right Now, And Ignore The 24 And 43,
// Thats Just For Testing, We Will Remove It Later,
// So, Lets Get Started, 
// Element Selection:
const score0El = document.querySelector('#score--0'); // <-- We Use The "#" Here Because We Are Selecting An Id, If It Was A Class, We Would Use ".",
const score1El = document.getElementById('score--1'); // <-- Here We Dont Use The "#", Because It Already Knows Its An Id, As You Can See By The Name, 
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// Here Are Two Ways To Select An Element With An Id,
// I Usually Use The .querySelector, Even Though .getElementById  A Bit Faster,
// Thats If Your Selecting Thousands Of Elements At Once,
// Now As Always, We Change The textContent To 0,
// Starting Conditions:
score0El.textContent = 0;
score1El.textContent = 0;
// Lastly, We Need To Select And Hide The Dice Image,
// And For That, We First Create A hidden Class In The CSS File,
// Just Like In The Previous Project,
// Now That Thats Done, We Select The Dice Image,
diceEl.classList.add('hidden');
// And Thats All For Now, And Again, Congrats On Making This Far😄,

let currentScore = 0;

// I Originally Planned To Just Commit/Push This Short Amount Of Code,
// But I Decided To Add Another Topic In This One,
// Because, This Code Is Too Short😅, Never Though I'd Say That,
// So, I Guess Our Extra Topic In This Subrepo Will Be,
// To Code The Rolling Of The Dice, Which Is The Most Important Functionality,
// And Showing The Dice, According To The Random Number,
// We Will Also, I Guess Treat The First Code Part Of This Subrepo,
// So The Code Above, As The Introduction Or Setup Part Of The Project,
// Anyways, Lets Begin Shall We,
// So First, I Will Add Some More Variables In The Top Code,
// Now We Will Start With The Rolling Dice Functionality,
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
        current0El.textContent = currentScore; // CHANGE LATER,
    } else {
        // Switch To Next Player,
    }
});
// Here, We First Generate A Random Dice Roll,
// And Use Our Same Line Of Code For A Random Number As Used In The First Project,
// Then, We Display The Dice By Removing The hidden Class From It,
// We Also Change The Source Of The Dice Image,
// And Use The Template Literal To Change The Image According To The Random Number,
// You Can Also console.log It To See If The Random Number,
// Is Matching With The Dice Image Or Not,
// Lastly, We Check If The Rolled Number Is 1 Or Not,
// Now We Will Create A Variable For The Current Score,
// Because As We Know, We Should Not Just Store Data Only In The DOM,
// And In This Case, We Should Not Only Display The Current Score,
// In The User Interface, Instead, We Also Want The Variable In Our Code,
// Thats Why We Need To Define A Variable, And We Will Do So,
// After The Starting Conditions, After That,
// We Will Check If The Rolled Dice Is Not Equal To 1,
// And Also Add More Elements In The Element Selections,
// For Them, I'll Be Using .getElementById This Time,
// Now, I Wrote The "CHANGE LATER" Comment,
// Because, We Will Later Add The Functionality To Switch Between Players,
// We Will Do So, But This Is All For This Subrepo, And First Part Of This Project, 
// Since I Already Combined Two Topics In This Subrepo😅,
// So, I Just Wanted To Say, I'm Proud Of You For Making This Far👏,
// Not Giving Up, Failing Multiple Times, Yet Still Moving Forward🫡,
// Not Everyone Can Do As Such, And With That, Take A Well Deserved Break,
// Then Later On, Keep Practicing, Keep Analyzing And Researching,
// Because As They Say,"Mastery Is A Journey, Not A Destination🚀".
// So, Keep Going, I'll Be On Your Side, And Happy Coding😄💻💙!




