/* Declare a function 'findPair', which takes in an array of distinct numbers and a callback as arguments, and returns another function. The returned function should take in no arguments and when invoked, should find the next pair of numbers with the maximum sum when passing each to the callback and return them as an array of length two. If there's no pair left, all subsequent calls should return "No valid pairs left!".
 */

function findPair(numbers, callback) {
  // Initialize the first index to keep track of the current position in the array
  let index1 = 0;
  // Initialize the second index to the next position
  let index2 = 1;
  // initialize maxSum to store the first pair's sum
  let maxSum = callback(numbers[index1], numbers[index2]);

  // return a function that takes no args
  return function () {
    // check if index1 or index2 is out of bounds
    if (index1 >= numbers.length - 1 || index2 >= numbers.length) {
      // Return the message if there are no valid pairs left
      return "No valid pairs left!";
    }

    // Get the current pair
    let pair = [numbers[index1], numbers[index2]];
    // Calculate the sum of the pair
    let sum = callback(numbers[index1], numbers[index2]);

    // while sum is less than maxSum
    while (sum < maxSum) {
      // check if index2 is less than 1 less than numbers length
      if (index2 < numbers.length - 1) {
        // if so, move to the next position for the second index
        index2++;
      } else {
        // Move to the next position for the first index
        index1++;
        // Reset the second index to the next position
        index2 = index1 + 1;
      }
      // check if index1 or index2 is out of bounds
      if (index1 >= numbers.length - 1 || index2 >= numbers.length) {
        // Return the message if there are no valid pairs left
        return "No valid pairs left!";
      }
      // update the current pair
      pair = [numbers[index1], numbers[index2]];
      // update the current sum
      sum = callback(numbers[index1], numbers[index2]);
    }

    // update the maxSum
    maxSum = sum;

    // check if index2 is still less than 1 less than numbers length
    if (index2 < numbers.length - 1) {
      // if so, move to the next position of index2
      index2++;
    } else {
      // move to the next position of index1
      index1++;
      // reset the position of index2
      index2 = index1 + 1;
    }

    return pair; // Return the pair with the maximum sum
  };
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
const callback = (a, b) => a + b;

const getNextPair = findPair(numbers, callback);

console.log(getNextPair()); // Output: [1, 2] - The pair [1, 2] has the maximum sum (3)
console.log(getNextPair()); // Output: [1, 3] - The pair [1, 3] has the maximum sum (4)
console.log(getNextPair()); // Output: [1, 4] - The pair [1, 4] has the maximum sum (5)
console.log(getNextPair()); // Output: [1, 5] - The pair [1, 5] has the maximum sum (6)
console.log(getNextPair()); // Output: [2, 4] - The pair [2, 4] has the maximum sum (6)
console.log(getNextPair()); // Output: [2, 5] - The pair [2, 5] has the maximum sum (7)
console.log(getNextPair()); // Output: [3, 4] - The pair [3, 4] has the maximum sum (7)
console.log(getNextPair()); // Output: [3, 5] - The pair [3, 5] has the maximum sum (8)
console.log(getNextPair()); // Output: [4, 5] - The pair [4, 5] has the maximum sum (9)
console.log(getNextPair()); // Output: [5, 4] - The pair [5, 4] has the maximum sum (9)
console.log(getNextPair()); // Output: No valid pairs left! - All pairs have been exhausted
