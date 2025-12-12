'use strict';
// Today, Will Be A Short One, Because We Will Be Learning How To Manipulate,
// CSS Styles, Yes That Is Possible Using DOM Manipulation,
// And So Lets Try That Out Now,
// So, First, Lets Say, That The Background Color Of Our Game,
// Should Turn Green When The Player Guesses The Right Number,
// So When The Player Wins The Game,
// And We Will Also Make The Hidden Number Wider When Its Revealed,
// And In Which Scenario Should We Put It? In The Winning Scenario,
// Also Lets Add Some Comments To Simplify The Code,
const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When There Is No Input,
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';

    // When Player Wins,
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct Number!';

    document.querySelector('body').style.backgroundColor = '#60b347'; // <-- Where We Select The Body Using The "body" Element, And Change The CSS Style,
    document.querySelector('.number').style.width = '30rem'; // <-- Where We Increase The Width Of The Number Box,

    // When Guess Is Too High,
  } else if (guess > number) {

    if (score > 1) {
      document.querySelector('.message').textContent = '📈Too High!';
      score = score - 1; // Or Score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game!';
      document.querySelector('.score').textContent = 0;
    }

    // When Guess Is Too Low,
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
// Now Lets Begin, So We Want To Manipulate The Style Of The Whole Page,
// Which Is The Body Of The Page, And We Select The body,
// And Again, The body Is The Entire Visible Part Of The Website,
// Which Is The "body" Element In The HTML File,
// And As Always, We Select The Element That We Want To Manipulate,
// And This Time, We Only Use The Element Name,
// And No Dots, Because It Isnt A Class,
// And Just A Straight Up Element, So Just The Element Name,
// Then, We Write "".style" Which Gives Us Access,
// To The CSS Properties Of The Element, Then Another Dot,
// And The CSS Property That We Want To Change,
// Which In This Case Is The Background Color,
// And Instead Of The Way You Write It In CSS(background-color),
// You Write It In JavaScript Like This(backgroundColor),
// So By Using The Camel Case Notation Which We've Already Learnt About,
// And This Same Rule Applies To All CSS Properties, That Have Multiple Words,
// Now, We Set The Background Color To Green/Whatever You Choose AFTER an equals Sign,

// Now We Increase The Width Of The Number Box,
// And We Basically Do The Same Thing, But This Time We Select The Class,
// Also, Keep In Mind, We Always Need To Specify A String,
// And Cannot Just Simply Write A Number, It Needs To Be A String,
// And In This Case, We Also Need A Unit For It, Which Will Be 30rem For My Choice,
// And We Basically Do The Same Thing For The Losing Scenario,
// So Just Changing The Color To Red This Time, Or Your Preferred Color,
// And As I Think You Should Do It Yourselves, Even If Its Easy,
// But Anyways, This Was All For Todays Subrepo, This Was Quite Long,
// And I Wasnt Expecting It To Be😅, This Was Also In My Favorite Subrepo,
// In This Section, Because For Me, I Love Styling,
// And With JavaScript, Its So Much More Fun😄,
// But Anyways, Keep Practicing And Enjoy These Moments, Happy Coding🫡.