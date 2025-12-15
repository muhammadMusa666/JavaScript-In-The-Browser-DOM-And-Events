// I Hope You Did The Challenge, And At Least Tried!
// But Anyway, Here's The Solution:
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  const number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
// Again, Dont Worry If You Didnt Do It Perfectly, Or Even Failed,
// Because Both Are Ok, And Needed To Progress🫡