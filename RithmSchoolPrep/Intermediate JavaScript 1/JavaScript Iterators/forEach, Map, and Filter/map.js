let arr = [1, 2, 3, 4];
arr.map(function (val, index, array) {
  return val * 2;
}); // [2,4,6,8]

let tripledValues = arr.map(function (val, index, arr) {
  return val * 3;
});

tripledValues; // [3,6,9,12]

// Here is how we can refactor our double method to use map
function doubleArray(arr) {
  // return the result of arr.map
  return arr.map(function (val) {
    // return a new array with each value doubled
    return val * 2;
  });
}

doubleArray([2, 4]); // [4, 8]

/**
 *  Return a new array with each value multiplied by its index in the array
 *
 * @param {number[]} arr - The original array
 * @returns {number[]} - A new array
 */

function valTimesIndex(arr) {
  return arr.map(function (val, index) {
    return val * index;
  });
}

console.log(valTimesIndex([1, 2, 3])); // [0,2,6]
console.log(valTimesIndex([5, 10, 15])); // [0,10,30]

/**
 * Return an array with they values for a given key
 * @param {Object[]} arr - An array of objects
 * @param {string} key - The key to search and extract the value
 * @returns {Array} - An array of the values of the given key (can be any type)
 */

function extractKey(arr, key) {
  return arr.map(object => {
    return object[key];
  });
}

console.log(extractKey([{ name: "Elie", isInstructor: true }, { name: "Tim", isInstructor: true }, { name: "Matt", isInstructor: true }], "name")
);

// ["Ellie", "Tim", "Matt"]