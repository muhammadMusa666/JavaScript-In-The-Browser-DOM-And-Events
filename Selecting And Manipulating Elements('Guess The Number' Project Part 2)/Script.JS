'use strict';
// This Is Part 2 Of The Project, Where We Will Learn,
// How To Select And Manipulate Elements,
// Also, Change Of Plans, In This Section, We Will Do Other Projects Of Course,
// But We Will Be Learning DOM And DOM Manipulation Aswell As Events,
// But Doing Those With The Projects,
// So No Subrepo Specifically For A Topic Like How We Did Before Before,
// Which Means, We Will Complete Each Project In Parts,
// And We Will Learn About A New Topic With The Project, So While Completing It,
// I Hope You Understand😅! So Lets Begin:
// Previously, We Already Selected The Message Element Here,
// By Using querySelector, Then We Also Got,
// The textContent From The Selected Element:
console.log(document.querySelector('.message').textContent);
// But Besides Getting The textContent, We Can Also Set The Content Of The Element,
// So Instead Of Start Guessing..., Here I Started With The Correct Number,
document.querySelector('.message').textContent = 'Correct Number!';
// Here, We Add Additional Code At The End Where We Want The New Content To Be,
// Now If We Look At The Console, It Will Still Show Start Guessing...,
// Thats Because The Above Code Before The "Correct Number!" Code,
// Is Still The Original Message In The HTML File,
// And If You Want To Change That, Then,
// You Can Just Copy And Paste The Original Code, ABove The "Correct Number!" One,
// And It Will Show "Correct Number!" Aswell,
// console.log(document.querySelector('.message').textContent);
// And If You Dont Know, It Works Because We Changed The Text Content Of The Element,
// On The New Code, And From Now On Unless We Change It,
// It Will Show "Correct Number!" After The .textContent = 'Correct Number!'; Code,

// Now That You Understand Most Of It,
// Lets Do The Same With The Secret Number And The Score,

document.querySelector('.number').textContent = 16;
document.querySelector('.score').textContent = 20;

// Since This .guess Is An Input Field,
// We Have To Use The .value Property To Get The Value Of The Input Field,
document.querySelector('.guess').value = 24;
console.log(document.querySelector('.guess').value);

// This Was All For Today, See You In The Next Subrepo,
// Where We Will Handle The Click Events, So The Click Of The "Check!" Button
// So Until Then, Keep Researching, Keep Practicing, And Happy Coding🫡.




