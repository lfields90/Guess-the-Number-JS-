// YOUR CODE HERE
var randNum = Math.floor(Math.random() * 10 + 1);
var user = prompt('What is your name?');
alert('Okay ' + user + ', i\'ll give you three chances to guess my number.');

for (var i = 0; i < 3; i++) {
  var userNumber = prompt('Pick a number between 1-10.')
  if (userNumber == randNum) {
    alert('Congrats ' + user + "! You've won!!!");
    break;
  } else {
    alert('Woomp, Woomp. At least you tried.');
  }
}

alert('My random number was ' + randNum + '!');
