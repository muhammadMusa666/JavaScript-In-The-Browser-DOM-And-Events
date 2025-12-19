'use strict';
// Today, We Will Learn How To Work With Classes,
// So, Learning How To Manipulate Classes,
// Now In The Last Subrepo, We Learned How We Can Do Somethings,
// For All Of The 3 Buttons At The Sametime,
// And For That We Used A For Loop, Which Loops Over The NodeList,
// Which Is Basically An Array Holding All Of The Elements,
// In This Case Are Buttons, And So, This btnsOpenModal[i] Becomes The Element,
// In Each Iteration, And Then From There We Simply The .textContent Property,
// But Now, Lets Take It A Step Further,
// And Instead, Will Call The addEventListener Method,
// Just Like We Did Before, And Remember,
// In Order To Respond To A Click Event, We Will Attach An Event Handler Function,
// To The Element, Also, Event Handler And Event Listeners Are Pretty Much The Same,
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function(){
    modal.classList.add('hidden'); // <-- Read The Comments Below, Then You'll Understand Why This Part Is Here, Sorry For The Inconvenience,
    overlay.classList.add('hidden');
}

for(let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal); /* function(){ // <-- This Function Is Also Called An Anonymous Function, Because It Does Not Have A Name,
    //     console.log('Button Clicked');
    //     modal.classList.remove('hidden'); <-- All Of This Was Pasted In The openModal Function,
    //     overlay.classList.remove('hidden');
    // }); */
// Now Let Me Explain, So, We Removed The console.log,
// Because That Just Simply Doesnt Make Sense With An Event Listener,
// Then We Add the console.log Inside The Handler Function,
// And We Run The Code, And It Works, When We Click One Of The Buttons,
// The Message Appears In The Console,
// Next, We Will Use The "hidden" Class,
// Which I Styled In The CSS After Making It In The HTML,
// And You Can Test, If You Remove It From The HTML,
// The Modal Window Will Appear,
// So, We Can Use This Hidden Class, To Show Us The Modal Window,
// After Coding It In JavaScript,
// And Thats How, We First Select The modal Element, Which We Stored In A Variable,
// Then, After Using It, We Write The "classList" Property,
// So, This classList Property Has A Couple Of Methods,
// And The One We Will Use, Is The Remove,
// I Think You Know Where We're Going With This😅,
// And So, The Class That We Use Is The "hidden" Class,
// We Can Also Remove Multiple Classes, We Use The Comma To Do So,('hidden', 'You'),
// Also, Keep In Mind, This Is Very Important,
// We Dont Use The Dot Here, So Not Like This('.hidden'),
// Instead Like This('hidden'), Because The Dot Is Only The Selector,
// But We Are Not Selecting Anything Anymore, And Just Passing In The Class Name,
// Now There Are Way More Things This Can Do,
// And We Will Use Them In The Next Subrepo, And Maybe In This One Aswell😉,
// Anyways, Now We Do The Same With The Overlay Element, To Hide The Modal Window,

// Now We Still Cant Close The Window, Because The Close Button Doesnt Work,
// And Neither Do The Otherways To Close It,
// So, Lets Take The btnsCloseModal, And Add An EventListener To It Aswell,
// btnCloseModal.addEventListener('click', function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });
// Now That We Can Close The Modal Window, We Will Now Make It Close,
// When We Click Outside The Modal Window,
// We Could Just Copy The Code Like This:
// overlay.addEventListener('click', function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });
// But Always Remember The DRY Principle, And Instead,
// And So, That Is Why The 2 Code Blocks Above Are Commented Out,
// So, Instead, We Make Another Function, And Call It In Both Of Them,
// const closeModal = function(){
//     modal.classList.add('hidden');  <-- This Was Moved Up And Above The For-Loop,
//     overlay.classList.add('hidden');
// }

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
// And This Is So Much Better Than Before,
// Also, If Your Wondering Why It Wasnt Like This('click', closeModal()),
// Because It Would Immediatly Call The Function,
// But We Want The closeModal Function To Be Executed,
// Only When The Click Even Happens,
// And We Do The Same With The overlay,
// Now We Do The Same With The Function That Opens The Modal,
// Thats Why The Commented Out Code Is There, Because It Was Moved Up The For-Loop,
// And That The Code In The For-Loop Was Pasted In The openModal Function,
// Again, Sorry For The Inconvenience,
// Now As A Recap, If You Want To Use The Same Function, In Multiple Event Listeners,
// Then You Need To Specify That Function, As A Separate Function,
// Then You Can Pass It In As Arguments, To Other AddEventListener Functions,
// Now, About Classes, Working With Them Is Really Important Stuff,
// So Working With Classes Is Something That We Do All The Time, Anyways,
// This Was All For Today, This Was A Really Big Pain To Make,
// Seriously This Time😅, Like Alot, But, If You Want To Do The Same,
// Then Keep Practicing, Keep Analyzing And Researching,
// And Happy Coding🫡😎💻!






















