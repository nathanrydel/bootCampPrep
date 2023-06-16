// Write a function called "isOldEnoughToDrink". Given a number, in this case an age, "isOldEnoughToDrink" returns whether a person of this given age is old enough to legally drink in the United States. Notes:

// The legal drinking age in the United States is 21.

function isOldEnoughToDrink(number) {
  return number >= 21;
}

var output = isOldEnoughToDrink(22);
console.log(output); // --> true

// Write a function called "isOldEnoughToDrive". Given a number, in this case an age, "isOldEnoughToDrive" returns whether a person of this given age is old enough to legally drive in the United States. Notes:

// The legal driving age in the United States is 16.

var output2 = isOldEnoughToDrive(22);
console.log(output2); // --> true

function isOldEnoughToDrive(age) {
  return age >= 16;
}

// Write a function called "isOldEnoughToVote". Given a number, in this case an age, 'isOldEnoughToVote' returns whether a person of this given age is old enough to legally vote in the United States. Notes:

// The legal voting age in the United States is 18.

var output3 = isOldEnoughToVote(22);
console.log(output3); // --> true

function isOldEnoughToVote(age) {
  return age >= 18;
}

// Write a function called "isOldEnoughToDrinkAndDrive". Given a number, in this case an age, "isOldEnoughToDrinkAndDrive" returns whether a person of this given age is old enough to legally drink and drive in the United States. Notes:

// The legal drinking age in the United States is 21.
// It is always illegal to drink and drive in the United States.

var output4 = isOldEnoughToDrinkAndDrive(22);
console.log(output4); // --> false

function isOldEnoughToDrinkAndDrive() {
  return false;
}
