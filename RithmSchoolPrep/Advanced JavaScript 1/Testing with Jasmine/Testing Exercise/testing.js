/**
 * Replace a character in a given string with another character. Replacement is case sensitive.
 * @param {string} str - The original string
 * @param {string} char - The character to replace
 * @param {string} replaceChar - The replacement character
 * @returns {string} - A new string with the character replaced.
 */
function replaceWith(str, char, replaceChar) {
  return str.split("").reduce((prev, next, curr) => {
    if (str[curr] === char) {
      prev += replaceChar;
    } else {
      prev += next;
    }
    return prev;
  }, "");
}

/**
 * Return a copy of the array a specified number of times
 * @param {Array} arr - The array to expand
 * @param {number} copyNum - Number of times to expand arr
 * @returns {Array} - The  new array copied the specified number of times
 */
function expand(arr, copyNum) {
  const result = [];
  while (copyNum > 0) {
    result.push(...arr);
    copyNum--;
  }
  return result;
}

/**
 * Return the boolean check if the given args are all numbers or not
 * @param  {...any} args - Any number of arguments
 * @returns {boolean} - Whether all the args are numbers or not
 */

function acceptNumbersOnly(...args) {
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] !== "number" || isNaN(args[i])) {
      return false;
    }
  }
  return true;
}

function mergeArrays(arr1, arr2) {
  const merged = arr1.concat(arr2);
  const sort = merged.sort((a, b) => a - b);
  return sort;
}

function mergeObjects(obj1, obj2) {
  const merged = { ...obj1 };

  for (let key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      merged[key] = obj2[key];
    }
  }
  return merged;
}