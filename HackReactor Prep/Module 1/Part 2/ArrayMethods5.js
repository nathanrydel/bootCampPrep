// 1
// removeFromBackOfNew
// Write a function called "removeFromBackOfNew".

// Given an array, "removeFromBackOfNew" returns a new array containing all but the last element of the given array.

// Notes:

// You should be familiar with the 'slice' method.

var arr = [1, 2, 3];
var output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]

function removeFromBackOfNew(arr) {
  // your code here
  return arr.slice(0, arr.length - 1);
}

// 2
// removeFromFrontOfNew
// Write a function called "removeFromFrontOfNew".

// Given an array, "removeFromFrontOfNew" returns a new array containing all but the first element of the given array.

// Notes:

// You should be familiar with the 'slice' method.

var arr2 = [1, 2, 3];
var output2 = removeFromFrontOfNew(arr2);
console.log(output2); // --> [2, 3]
console.log(arr2); // --> [1, 2, 3]

function removeFromFrontOfNew(arr) {
  // your code here
  return arr.slice(1);
}

// 3
// countCharacter
// Write a function called "countCharacter".

// Given a string input and a character, "countCharacter" returns the number of occurrences of a given character in the given string.

var output3 = countCharacter("I am a hacker", "a");
console.log(output3); // --> 3

function countCharacter(str, char) {
  // your code here
  let charCounter = 0;
  const splitArr = str.split("");
  splitArr.forEach((letter) => {
    if (letter === char) {
      charCounter++;
    }
  });
  return charCounter;
}
