// 1
// isOddLength
// Write a function called "isOddLength".

// Given a word, "isOddLength" returns whether the length of the given word is odd.

var output = isOddLength("special");
console.log(output); // --> true

function isOddLength(word) {
  // your code here
  return word.length % 2 === 1;
}

// 2
// isEvenLength
// Write a function called "isEvenLength".

// Given a word, "isEvenLength" returns whether the length of the word is even.

var output2 = isEvenLength("wow");
console.log(output2); // --> false

function isEvenLength(word) {
  return word.length % 2 === 0;
}

// 3
// isEvenAndGreaterThan10
// Write a function called "isEvenAndGreaterThanTen".

// Given a number, "isEvenAndGreaterThanTen" returns whether it is both even and greater than 10.

var output3 = isEvenAndGreaterThanTen(13);
console.log(output3); // --> false

function isEvenAndGreaterThanTen(num) {
  // your code here
  return num > 10 && num % 2 === 0;
}
