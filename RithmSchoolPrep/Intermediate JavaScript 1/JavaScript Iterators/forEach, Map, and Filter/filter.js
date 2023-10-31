let arr = [1, 2, 3, 4];
let valuesGreaterThanTwo = arr.filter(function (val) {
  return val > 2;
});

console.log(valuesGreaterThanTwo); // [3,4]

/**
 * Return the number of occurrences of a specific letter in a given array of letters
 *
 * CASE INSENSITIVE FILTER
 *
 * @param {string[]} arr - The given array of letters
 * @param {string} letter - The letter to filter
 * @returns {number}
 */

function filterLetters(arr, letter) {
  letter = letter.toLowerCase();
  return arr.filter(char => char.toLowerCase() === letter).length;
}

console.log(filterLetters(["a", "a", "b", "c", "A"], "a")); // 3
console.log(filterLetters(["a", "a", "b", "c", "A"], "z")); // 0
console.log(filterLetters(["a", "a", "b", "c", "A"], "B")); // 1

/**
 * Return an array of objects that have truthy values for a given object
 *
 * @param {Object[]} arr - The given array of objects
 * @param {string} key - The key to filter
 * @returns {Object[]} - The new filtered array
 */

function filterKey(arr, key) {
  return arr.filter(object => object[key]);
}

console.log(filterKey([{ name: "Elie", isInstructor: true, isHilarious: false }, { name: "Tim", isInstructor: true, isHilarious: true }, { name: "Matt", isInstructor: true }], "isHilarious")
);
// [{name: "Tim", isInstructor:true, isHilarious:true}]