'use strict';
// Today, We Will Be Adding The Resetting Functionality For Our Game,
// So Whenever We Click The New Game Button, The Game Should Reset,
// And We Did This In Our First Project, So You Can Take This As A Challenge,
// By Doing This Yourself Before Continuing On,
// I Wont Make A Different Section And Stuff Like In Our First Project,
// Because There Is A Lot Of Relocation Of Code We Will Have To Do In This Subrepo,
// Sorry For This, But If I Make You The Challenge, Then It Wont Be As Efficient Here,
// But, You Can Do It If You Like, And Make The Reset Functionalities Yourself,
// Which Means You Will Have To Do All The Relocations Yourself😅,
// So I Suggest Creating A Separate File, Copy This Code We Have Right Now,
// Paste It There, And Do The Challenge There😊, So You Can Compare It😄,
// But Lets Start The 4th Part Of This Project,
// Also, Since We Are Doing Relocations Mostly In This Part,
// Is Th Reason Why I Have Put These Comments On The Top Part Of Our Code,
// But Some Of It Will Be At The Bottom, So Make Sure You Read The Comments,
// From Bottom To Up And From Up To Bottom😉, So Now, Lets Begin:

// We First Need The btnNew, So, We Will Add Another Event Handler,
// At The Complete Bottom,

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
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');

// const scores = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;
// let playing = true;

let scores, currentScore, activePlayer, playing;

const init = function () {
    
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}
init();

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
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
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function () {
    if(playing) {
        // 1. Add Current Score To Active Player's Score,
        scores[activePlayer] += currentScore;
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

btnNew.addEventListener('click', /*function*/ init);
    // score0El.textContent = 0;
    // score1El.textContent = 0;
    // current0El.textContent = 0;
    // current1El.textContent = 0;
    // player0El.classList.remove('player--winner');
    // player1El.classList.remove('player--winner');
    // player0El.classList.add('player--active');
    // player1El.classList.remove('player--active');
// });
// Now Here, We Will Put Inside The Things We Want To Reset,
// So We'll Start By The Scores,
// Then, We'll Remove The Winner And Active Player Classes,
// Here, I Actually Did add Instead Of Remove, Because,
// Player 0 Should Be The Active Player In The Beginning,
// So There's No Need To Remove It, And If It Was Already There,
// Then JavaScript Will Not Add It Again,
// Just Like How If We Remove Something Not There, There Wont Be An Error, And Do Nothing,
// Alright, Now Thats For The Visible Part Of The UI,
// But Now, We Have To Set Our Internal State Variables Back To The Original State,
// So Basically, We Have To, Add The Scores Back To Zero,
// The Current Score Back To Zero, Set The Active Player Back To The First Player,
// Lastly, Just Start The Game Again, These 4 Are The Last Part,
// Of The Starting Conditions, So The scores, currentScore, activePlayer And playing,
// And Above The switchPlayer Function, So, Lets Do That,
// Now You Might Be Thinking, Should We Just Copy It Down Here?
// Well, If You've Been Following Me Along, Then You Know The Answer Very Well😉,
// So No, We Will Create A Function Instead😄,
// Which Contains The scores, currentScore, activePlayer And playing Code,
// Or Like I Said, The Last Part Of The Starting Conditions Above The switchPlayer,
// And It Will Combine With The btnNew Code Down Here,
// Then Like I Said, Create A New Function, Which Will Be Called "init",
// Which Stands For Initlialization, So, I Will Copy The btnNew Code Down Here,
// And For You, I Will Comment It Out So You Know Where We Took It From,
// Then, We Will Create The Function Between The Last Part Of The Starting Conditions,
// Or Above The switchPlayer Function, And Past The Code There,
// We Will Also, Copy The Entire Starting Conditions There Too,
// And Paste It In The New init Function Aswell, For You, I Will Comment Out,
// The Starting Conditions Out, So You Know Where It Was,
// We Will Remove The Extra Duplicate score0El And score1El,
// And Have Moved The diceEl Down, And Above The player Lines Of Code,
// Now, This Is Our Initializing Function, And We Want It To Execute In Two Situations,
// Whenever We Load The Page For The First Time, Or When The Reset Button Is Clicked,
// So, We Need The scores To Be Zero At The Beginning, With The currentScore And All,
// And Since We Used To Have This Code Outside Of Any Function,
// It Would Be Executed Right When The File Was Loaded,
// But Now, It Is Inside The init Function, Which Is Not Being Called At Any Point,
// So, The Code Would Not Get Executed As The Page Loads,
// And If We Load The Page, You Will See, The Same Weird Starting Conditions,
// By Showing The Random Numbers And Dice, The Buttons Dont Work Either,
// So The Solution To It As Some Of You Might Guess, Is We Simply Run It😉,
// Sorry For The Suspensful Approach If You Felt It That Way😅,
// Anyways, We Run It By Writing init(); Outside Of The init Function At The End Of It,
// Now If We Run Our Project, It Will Encounter Some Errors,
// And It Is About Something We Havent Gotten Into Yet, And Will In The Next Section,
// Ironically Enough, This Is The Last Part Of This Project😄,
// This Something, Is Called Scoping, But Let Me Explain To Your Right Now,
// The Variables I Defined, The scores, currentScore, activePlayer And playing,
// Are Only Available Inside Of The init Function And Again,
// These 4 Variables Are Declared Inside Of The Function, So,
// They Are Not Accessible Outside Of The Function, Which We Say,
// Are Scoped To The init Function, Get It? Because That Is Where We Declared Them,
// And The Solution To This, Is To Declare These Variables, Outside Of Any Function,
// But Without Any Value, And So Its In The Init Function,
// Where They'll Really Be Declared, If That Doesnt Make Full Sense,
// It Hopefully Will In The Next Section Where Will Really Understand Deeply,
// How Scoping Like This Works, Anyways, Lets Declare These Variables,
// And We Will Do So Outside The init Function, Above It,
// Without Any Values Obviously, So Empty Variables, Also Using Let For Obvious Reasons,
// Also Removing The lets And const On The scores, currentScore, activPlayer,
// And Playing Variables, Because That Will Create New Variables,
// So Now Basically, We Declare The Variables Outside Of The Function,
// Then Reassign Their Values Inside, Declaring And Assigning Is Not The Same,
// Since The Variables Are Living Outside Now, They Are Accessible Everywhere,
// Now To Finish, We Also The init Function, On The btnNew Or Reload Function,
// Which Is In The Event Handler Of btnNew, And Just Like Before,
// Here We Do Not Declare The Anonymous Function Anymore,
// But Instead, We Pass In The init Function,

// Now, Finally, This Project, And Most Importantly, This Subrepo, Is Complete😮‍💨🎉🎊,
// This Is Soo Long, It Took Me So Much Time To Make This⌛,
// But For People Trying To Learn JavaScript,
// I Would Definitly Overcome These Challenges, Because You Are Too😊,
// Just Like You Have Done So Already With My Previous Sections And Challenges💪,
// But Anyways, Congrats On Making This Far👏, I Am Proud Of You😄,
// And If You Did The Challenge That I Couldnt Make For You In This Part,
// Then Thats Just Too Perfect😉, And Your On Your Way To Become A Seasoned Dev😎,
// Take A Well Deserved Break😄, Then After Refreshing🥤,
// See You In The Next Section, And Best of Luck In Your Journey🚀📈,
// Keep Practicing, Researching, Analyzing, And Happy Coding😄💻💙🩵!