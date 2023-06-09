// Problem 1:
// Write a recursive function to calculate the factorial of a given positive integer.

function factorial(number) {
  if (number === 1 || number === 0) {
    return 1;
  }
  return number * factorial(number - 1);
}

console.log(factorial(5));

// Problem 2:
// Write a recursive function to find the nth Fibonacci number, given an input n. The Fibonacci sequence is defined as follows: the first two numbers are 0 and 1, and each subsequent number is the sum of the previous two.

function fib(n, cache = {}) {
  // check if n is 0 or 1 and return
  if (n === 0 || n === 1) {
    return n;
  }
  // check if n is key of cache
  if (cache[n]) {
    return cache[n];
  }
  // set result to evaluating fib on n - 1 and adding fib on n -2
  // pass in the cache
  const result = fib(n - 1, cache) + fib(n - 2, cache);
  // update cache at n to be result
  cache[n] = result;
  // return result
  return result;
}

console.log(fib(8));
console.log(fib(15));
console.log(fib(88));

// Problem 3:
// Write a recursive function to determine if a given string is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.

function isPalindrome(input) {
  // conver input to string with all lowercase and spaces removed
  const str = String(input).toLowerCase().replace(/\s/g, "");
  // Base Case: a empty string or single character string is palindrome
  // check if input length is 0 or 1
  if (str.length === 0 || str.length === 1) {
    // if so, return true
    return true;
  }
  // Recursive Case: compare the first and last characters of a string
  // if they are equal, check the subsequent substrings without first or last characters
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, str.length - 1));
  }
  // if they are not equal, return false;
  return false;
}

// Testing the function with strings and numbers
console.log(isPalindrome("Madam")); // Output: true
console.log(isPalindrome("Racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("A man a plan a canal Panama")); // Output: true
console.log(isPalindrome("Was it a car or a cat I saw")); // Output: true
console.log(isPalindrome("Not a palindrome")); // Output: false
console.log(isPalindrome(12321)); // Output: true
console.log(isPalindrome(12345)); // Output: false

// Problem 4:
// Write a recursive function to calculate the sum of all elements in an array of integers.

function sumAll(array) {
  // Base Case: if array is empty, return 0
  if (array.length === 0) {
    return 0;
  }
  // Recursive Case: add first element to sum of the rest of the array
  return array[0] + sumAll(array.slice(1));
}

console.log(sumAll([1, 2, 3, 4, 5])); // Output: 15
console.log(sumAll([-1, 7, 3, 2, 9])); // Output: 20
console.log(sumAll([-1, 3, 7, 2])); // Output: 11
console.log(sumAll([-1, -3, -7, -2])); // Output: -13
console.log(sumAll([])); // Output: 0

// Problem 5:
// Write a recursive function to find the maximum value in an array of integers.
function findMaxVal(arr) {
  // Base Case: array of 1 returns the element
  if (arr.length === 1) {
    return arr[0];
  }
  // Recursive Case:
  // Divide the array into two halves and recursively find the maximum
  // find the mid point of the array
  const midPoint = Math.floor(arr.length / 2);
  // declare leftMax to be recursive call of fn on arr[0] to midPoint
  const leftMax = findMaxVal(arr.slice(0, midPoint));
  // declare rightMax to be recursiv call of fn on midPoint to end
  const rightMax = findMaxVal(arr.slice(midPoint));
  // Return the comparison of leftMax and rightMax
  return Math.max(leftMax, rightMax);
}

// Testing the function
console.log(findMaxVal([4, 2, 9, 7, 5])); // Output: 9
console.log(findMaxVal([8, 3, 1, 6, 2])); // Output: 8
console.log(findMaxVal([5, 5, 5, 5, 5])); // Output: 5

// Problem 6:
// Write a recursive function to find all possible permutations of a given string. The permutations should not contain any duplicates.

function findPermutations(str) {
  // declare a results array as perms
  const perms = [];

  // Base Case: If str has 1 char, return as single perm
  if (str.length === 1) {
    perms.push(str);
    return perms;
  }

  // Recursive Case: Generate the perms by fixing each character at the beginning and permuting the rest

  // iterate over the str
  for (let i = 0; i < str.length; i++) {
    // set a char to the str element
    const char = str[i];
    // set the remaining chars
    const remainingChars = str.slice(0, i) + str.slice(i + 1);
    // generate the next permutation
    const nextPerm = findPermutations(remainingChars);

    // Concat the fixed character with the next perm
    for (let j = 0; j < nextPerm.length; j++) {
      perms.push(char + nextPerm[j]);
    }
  }
  // remove duplicates by converting to a set and then back to an array
  return Array.from(new Set(perms));
}

console.log(findPermutations("abc")); // Output: ["abc", "acb", "bac", "bca", "cab", "cba"]
console.log(findPermutations("aba")); // Output: ["aba", "aab", "baa"]
console.log(findPermutations("ab")); // Output: ["ab", "ba"]
console.log(findPermutations("ball")); // Output: [ 'ball','blal', 'blla', 'abll', 'albl', 'allb', 'lbal', 'lbla', 'labl', 'lalb', 'llba', 'llab' ]

// Problem 7:
// Write a recursive function to solve the Tower of Hanoi problem. Given three towers (source, destination, and auxiliary) and a stack of n disks, the function should print the necessary steps to move all disks from the source tower to the destination tower, obeying the rules of the Tower of Hanoi puzzle.
