/**
 * Return a new array of all the values doubled
 *
 * @param {number[]} array - The array of values to double
 * @returns {number[]} - The new array of doubled values
 */

function double(array) {
  let doubled = [];
  array.forEach(element => {
    doubled.push(element * 2);
  });
  return doubled;
}

console.log(double([4, 3, 2, 1]));
// [ 8, 6, 4, 2 ]

/**
 * Console log a new string with the first character and the last character of each value of a given array.
 *
 * @param {string[]} array - The given array of values
 */

function printFirstAndLast(array) {
  array.forEach(element => {
    console.log(element[0] + element[element.length - 1]);
  });
}

printFirstAndLast(['awesome', 'example', 'of', 'forEach']);
// ae
// ee
// of
// fh

/**
 * Return an array of objects that has the key and value added to each object
 *
 * @param {Object[]} array - The original array of objects
 * @param {string} key - The key to add
 * @param {string} value - The value to add
 * @returns {Object[]} - A new array with the key and value added to each object
 */

function addKeyAndValue(array, key, value) {
  // const updatedArr = []
  array.forEach(object => {
    object[key] = value;
  });
  return array;
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