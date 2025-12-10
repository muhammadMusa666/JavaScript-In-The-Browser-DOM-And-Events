'use strict';
// This Is Part 3 Of The Project, Where We Will Be Handling Click Events
// So Making Our Application Do Something When We Click The Check Button,
// As I Explained We Will Do In This Subrepo Before,
// Also, This Wil Be The First Time Our Code Reacts,
// To Something That Happens In The DOM,
// And For That We Will Use An Event Listener,
// Now An Event Is Something That Happens On The Page,
// Like A Mouse Click, A Key Press, Or A Mouse Moving,
// Then With The Event Listener We Can Wait,
// For A Certain Event To Happen, And Then React To It,
// Now In Order To Listen For Events, We Need To Select The Element,
// Where It Should Happen, So, The Button Element, AKA The Check Button,
document.querySelector('.check').addEventListener('click', function () {
//console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if(!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  }
});
// Now Let Me Explain, We Grab The check Class, And Put It There,
// Then We Add The Event Listener, Which Is A Method So We Use Parenthesis,
// Also There Are Multiple Ways To Listen For Events In JavaScript,
// But This Is The Most Used And Best One,
// Now In The Parenthesis, We First Pass In The Type Of The Event,
// Which In This Case Is A Simple Click, And So The Name Of The Event Is Click,
// And That Is Also The First Argument,
// Now We Actually Need To Tell The Event Listener What To Do,
// And We Do That By Defining A Function,
// Which Will Be Executed Whenever This Click Event Happens,
// And That Function Is Called The Event Handler,
// Also, This addEventListener Method, Is A Special Kind Of Function,
// Thats Because As A Second Argument, It Expects And Takes A Function Value,
// As An Argument, Which Is Definitely Quite Confusing😅,
// But At This Point, We Know There Will Be Tons Of Confusions😉,
// And Will Make More Sense, As We Do It Again And Again,
// For Now, Just Remember And Do What You Learned In The JS Fundamentals Sections,
// Which Is That A Function Is Also Just A Value,
// So We Can Pass It Into Another Function As An Argument,
// Just Like Any Other Value,
// So Now After We've Done The Function Part,
// Now We Have To Specify What Will Happen,
// And To Start, Lets Simply Log To The Console, The Value Of The Guess Input Field,
// Now It Works Because The Inputed Value Is Shown In The Console,

// And For You, Lets Quickly Go Over This Again,
// So We Selected This Button Here Using querySelector,
// And Then We Use The addEventListener Method On That Element,
// To Attach An Event Handler, And That Event Handler Is The Function,
// So This Is Again Just A Function Expression, So Like This:
// const x = function() {
    // console.log(16);
// }
// And We Basically Did The Exact Same Thing,
// We Simply Did Not Assign Any Variable,
// Instead We Passed It Directly Into The addEventListener Method,

// Now Lets Slowly Build Up The Game,
// So, In The Game, When We Click On The Button,
// Of Course The Number From The Input Field Should Get Retreived,
// So, We Already Coded It In, But Instead Of Logging It To The Console,
// Lets Just Save It Into A Variable, So const,
// Now Remember ThatWhenever We Get Something From The User Interface,
// We Usually Always Get A String, So Using The typeof Operator,
// However, We Will Eventually Have To Compare The Inputed Number,
// With A Randomly Generated Number, Which Is The Secret Number,
// And If We Want To Compare Them, They Both Need To Be Numbers,
// So We Convert It Into A Number Using The Number Function,

// Now Lets Start Implementing The Game Logic,
// But Just The Simplest Case, So The Case, Where There's Actually No Guess,
// So We Need To Check If The User Has Inputed A Value,
// So Lets Use The if-else Statement, And As You Can See,
// We Use The Logical Operator(!), And Then Code A Message,
// Also, Whenever We Do These Kinds Of Things,
// The First Scenario Is If There Is No Input,
// Anyways, This Was ALL for This Subrepo,
// Which Is Mostly Just.....Comments😅,
// I Usually Add More Code, But Doing It With This One Wouldnt Make Sense😆,
// So, See You In The Next Subrepo, And Until Then, Happy Coding🫡.