// YOUR CODE HERE
var randNum = Math.floor(Math.random() * 100 + 1);
console.log(randNum);
var user = prompt('What is your name?');
var correctGuess = 'no'
alert('Okay ' + user + ', i\'ll give you five chances to guess my number.');

for (var i = 0; i < 5; i++) {
  var userNumber = prompt('Pick a number between 1-100.')
  if (userNumber == randNum) {
    alert('Congrats ' + user + "! You've won!!!");
    correctGuess = 'yes'
    break;
  } else if(userNumber > randNum)  {
    alert('Woomp, Woomp. Too High!');
  } else if(userNumber < randNum)  {
    alert('Woomp, Woomp. Too Low!');
  }
}

if (correctGuess == 'no') {
  alert('You were close! My random number was ' + randNum + '!')
}
