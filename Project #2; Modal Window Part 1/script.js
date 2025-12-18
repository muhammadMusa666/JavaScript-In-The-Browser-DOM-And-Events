'use strict';
// Today, We Will Be Starting Our 2nd Project, Which Is Creating A Model Window,
// And Here We Will Build Our First UI Component,
// Now You'e Probably Seen This Across Many Different Websites,
// And It Works, If You Click A Certain Button, A Window Pops Up,
// It Has Some Content, With A Close Button,
// So, In This Project, We Will Be Making Them As Explained,
// And Let Me Tell You How It Should Work:
// We Click A Certain Button, And A Window Should Pop Up,
// And Cover The Center Of The Screen/Page With Some Content In It,
// It Should Have A Close Button, Which Is Used To Close It,
// It Can Be Closed If We Click Outside Of The Opened Window,
// And It Can Be Closed By Pressing The Escape Key,
// A Dark Background Should Appear Behind The Window,
// So Where The Rest of The Page Is, And It Should Be Slightly Dim,
// Thats Basically It, And Like Our Previous Project,
// I Will Be Dividing This One In Parts Aswell,
// And This Time, We Will Start By Selecting Everything We Need,
// For This Project, So Then We Can Use Them Again And Again,
// Which Is Way Better Than Selecting The Same Elements Again And Again,
// In The Previous Project, And In This One, We Will Have It All,
// Nicely Organized At The Top Of The File, And This Reminds Me,
// We Will Be Using Classes In This Project,
// And If You Cant Understand What Classes Or Other Things Are,
// Dont Worry, Because Your Not Here To Learn HTML Or CSS,
// But I Still Recommend You Watching A Free Crash Course On Youtube Or Something😅,
// Either Way, I Think Your Undertand What It Will Say,
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelector('.show-modal'); <-- Instead Of This,
const btnsOpenModal = document.querySelectorAll('.show-modal'); // <-- We Use This,

console.log(btnsOpenModal);

// Now We Could Have Given Them Any Names We Wanted,
// But Giving Them Good Names Helps With Identifying What It Does,
// And It Is Overall, A Good Practice,
// So, If We Run This Code, And Take A Look In The Console,
// We See Only 1 Of The 3 Show modal Buttons,
// And Now, We Can See The Limitations Of The .querySelector Method,
// Because It Only Selects The First Element
// Out Of The Multiple Ones That Are The Same,
// So Instead Of Just Doing It Again And Again,
// We Can Use .querySelectorAll, And You Can See By The Name, That It Selects All,
// And Now If We Look At The Console, We See A NodeList Of All 3 Elements,
// Now If We Want To Do Something With The NodeList,
// We Can Simply Loop Through It,
for(let i = 0; i < btnsOpenModal.length; i++)
    console.log(btnsOpenModal[i].textContent);
// Here The btnsOpenModal[i] Becomes The Element, And We Simply Add .textContent,
// And Thats Basically It For Today, I Hope You Liked It And Understood Most Of It,
// So Keep Practicing, Keep Researching And Analyzing, And Happy Coding😎!










