let arr = [2, 4, 6, 8];

arr.reduce(function (acc, next) {
  return acc + next;
}, 5);

/*
In the first iteration, acc is 5 and next is 2; the callback returns 5 + 2 = 7.
In the second iteration, acc is 7 and next is 4; the callback returns 7 + 4 = 11.
In the third iteration, acc is 11 and next is 6; the callback returns 11 + 6 = 17.
In the last iteration, acc is 17 and next is 8; the callback returns 17 + 8 = 25.
Now the array is exhausted, so reduce returns 25 (which is the sum of all elements in the array, plus 5)
*/

arr.reduce(function (acc, next) {
  return acc + next;
});

// 20 (When no second argument is supplied to reduce, the `acc` starts at the first value in the array, i.e. 2. In this case, we simply get the sum of all values in the array.)

let arr2 = [1, 2, 3, 4];
arr2.reduce(function (acc, next) {
  if (next >= 2) {
    acc['key' + next] = next;
  }
  return acc;
}, {});

// Think about what acc and next are for each step in the iteration!
// Ultimately, this reduce will return the following:
// Object {key2: 2, key3: 3, key4: 4}

/**
 * Return an array with they values for a given key
 * @param {Object[]} arr - An array of objects
 * @param {string} key - The key to search and extract the value
 * @returns {Array} - An array of the values of the given key (can be any type)
 */

function extractKey(arr, key) {
  arr.reduce((result, object) => {
    if (object.hasOwnProperty(key)) {
      result.push(object[key]);
    }
    return result;
  }, []);
}

/**
 * Count the number of occurrences of a specific letter in a given array of letters (CASE INSENSITIVE)
 *
 * @param {string[]} arr - The given array of letters to search
 * @param {string} letter - The letter to count
 * @returns {number} - The number of occurrences of the specified letter
 */

function filterLetters(arr, letter) {
  return arr.reduce((result, char) => {
    if (char.toLowerCase() === letter.toLowerCase()) {
      result++;
    }
    return result;
  }, 0);
}

console.log(filterLetters(["a", "a", "b", "c", "A"], "a")); // Output: 3
console.log(filterLetters(["a", "a", "b", "c", "A"], "z")); // Output: 0
console.log(filterLetters(["a", "a", "b", "c", "A"], "B")); // Output: 1

/**
 * Return an array of objects that has the key and value added to each object
 *
 * @param {Object[]} array - The original array of objects
 * @param {string} key - The key to add
 * @param {any} value - The value to add
 * @returns {Object[]} - A new array with the key and value added to each object
 */

function addKeyAndValue(array, key, value) {
  return array.reduce((result, object) => {
    const newObject = { ...object, [key]: value };
    result.push(newObject);
    return result;
  }, []);
}

console.log(addKeyAndValue([{ name: 'Elie' }, { name: 'Tim' }, { name: 'Elie' }], "isInstructor", true));
/*
[
    {
        name: 'Elie',
        isInstructor: true
    },
    {
        name: 'Tim',
        isInstructor: true
    },
    {
        name: 'Elie',
        isInstructor: true
    }
]
*/