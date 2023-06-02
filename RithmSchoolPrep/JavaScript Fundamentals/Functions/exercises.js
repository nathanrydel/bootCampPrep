// Part 1
// difference
// this function takes in two parameters and returns the difference of the two;

function difference(a, b) {
  return a - b;
}

console.log(difference(2, 2)); // 0
console.log(difference(0, 2)); // -2

// product
// this function takes in two parameters and returns the product of the two;

function product(a, b) {
  return a * b;
}
console.log(product(2, 2)); // 4
console.log(product(0, 2)); // 0

// printDay
// this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;

function printDay(num) {
  switch (num) {
    case 1:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thursday");
      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday");
      break;
    default:
      console.log("undefined");
      break;
  }
}
printDay(4); // "Wednesday"
printDay(41); // undefined

// lastElement
// this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.

function lastElement(array) {
  return array.pop();
}
console.log(lastElement([1, 2, 3, 4])); // 4
console.log(lastElement([])); // undefined

// numberCompare
// this function takes in two parameters (both numbers). If the first is greater than the second, this function returns “First is greater”. If the second number is greater than the first, the function returns “Second is greater”. Otherwise the function returns “Numbers are equal”

function numberCompare(a, b) {
  if (a == b) {
    return "Numbers are equal";
  } else if (a > b) {
    return "First is greater";
  }
  return "Second is greater";
}

console.log(numberCompare(1, 1)); // "Numbers are equal"
console.log(numberCompare(2, 1)); // "First is greater"
console.log(numberCompare(1, 2)); // "Second is greater"

// singleLetterCount
// this function takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.

function singleLetterCount(str1, str2) {
  let matchCount = 0;
  const charMatch = str2.toLowerCase();
  for (let char of str1) {
    if (char.toLowerCase() === charMatch) {
      matchCount++;
    }
  }
  return matchCount;
}

console.log(singleLetterCount("amazing", "A")); // 2
console.log(singleLetterCount("Rithm School", "o")); // 2

// Part 2
// multipleLetterCount
// this function takes in one parameter (a string) and returns an object with the keys being the letters and the values being the count of the letter.

function multipleLetterCount(word) {
  // initialize outputObj as empty obj
  const outputObj = {};
  // iterate thru word
  for (let i = 0; i < word.length; i++) {
    // if key exists, increment count
    if (!(word[i] in outputObj)) {
      outputObj[word[i]] = 1;
    } else {
      outputObj[word[i]]++;
    }
  }
  // return outputObj
  return outputObj;
}

console.log(multipleLetterCount("hello")); // {h:1, e: 1, l: 2, o:1}
multipleLetterCount("person"); // {p:1, e: 1, r: 1, s:1, o:1, n:1}

// arrayManipulation
// this function should take in at most four parameters (an array, command, location, and value).
// If the command is “remove” and the location is “end”, the function should remove the last value in the array and return the value removed. (In this case, the function only needs three arguments.)
// If the command is “remove” and the location is “beginning”, the function should remove the first value in the array and return the value removed. (In this case, the function only needs three arguments.)
// If the command is “add” and the location is “beginning”, the function should add the value (fourth parameter) to the beginning of the array and return the array.
// If the command is “add” and the location is “end”, the function should add the value (fourth parameter) to the end of the array and return the array.

function arrayManipulation(arr, cmd, loc, val) {
  // check if cmd === remove
  if (cmd === "remove") {
    // if yes, check if loc is end
    if (loc === "end") {
      // if yes, return last element of arr
      return arr.pop();
    }
    // return first element of arr
    return arr.shift();
  }
  // check if cmd is add
  if (cmd === "add") {
    //check if loc is beginning
    if (loc === "beginning") {
      // if yes, add value to front of arr
      arr.unshift(val);
      // return arr
      return arr;
    }
    // else, add val to end of arr
    arr.push(val);
    // return arr
    return arr;
  }
}

console.log(arrayManipulation([1, 2, 3], "remove", "end")); // 3
console.log(arrayManipulation([1, 2, 3], "remove", "beginning")); // 1
console.log(arrayManipulation([1, 2, 3], "add", "beginning", 20)); // [20,1,2,3]
console.log(arrayManipulation([1, 2, 3], "add", "end", 30)); // [1,2,3,30]

// isPalindrome
// A Palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This function should take in one parameter and returns true or false if it is a palindrome. As a bonus, allow your function to ignore whitespace and capitalization so that isPalindrome('a man a plan a canal Panama'); returns true

function isPalindrome(str1) {
  return str1.toLowerCase().split("").reverse().join("") === str1.toLowerCase();
}

console.log(isPalindrome("testing")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("hannah")); // true
console.log(isPalindrome("robert")); // false

// Part 3
// Rock / Paper / Scissor
// using your knowledge so far, build a game of Rock/Paper/Scissor where through the use of the prompt function, a user can enter their choice and based on a random selection – they can either tie/win or lose against a computer.
