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
  if (n === 0 || n === 1) {
    return n;
  }

  if (cache[n]) {
    return cache[n];
  }

  const result = fib(n - 1, cache) + fib(n - 2, cache);
  cache[n] = result;
  return result;
}

console.log(fib(8));
console.log(fib(15));
console.log(fib(50));

// Problem 3:
// Write a recursive function to determine if a given string is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.

// Problem 4:
// Write a recursive function to calculate the sum of all elements in an array of integers.

// Problem 5:
// Write a recursive function to find the maximum value in an array of integers.

// Problem 6:
// Write a recursive function to find all possible permutations of a given string. The permutations should not contain any duplicates.

// Problem 7:
// Write a recursive function to solve the Tower of Hanoi problem. Given three towers (source, destination, and auxiliary) and a stack of n disks, the function should print the necessary steps to move all disks from the source tower to the destination tower, obeying the rules of the Tower of Hanoi puzzle.
