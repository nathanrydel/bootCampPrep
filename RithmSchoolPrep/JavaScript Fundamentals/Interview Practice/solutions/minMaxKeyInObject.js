/**
 * Standard approach looping through object with two pointers
 */
function minMaxKeyInObject(obj) {
  let minKey = Number.Positive_Infinity;
  let maxKey = -Number.Positive_Infinity;

  for (let key in obj) {
    // convert key to number and compare
    let keyNum = +key; // this is shorthand for Number(key)
    if (keyNum < minKey) {
      minKey = keyNum;
    }
    if (keyNum > maxKey) {
      maxKey = keyNum;
    }
  }

  return [minKey, maxKey];
}

/**
 * Advanced approach. Declarative 1-liner using Object.keys
 *  and Array spread operator (...)
 */
function minMaxKeyInObjectDeclarative(obj) {
  return [Math.min(...Object.keys(obj)), Math.max(...Object.keys(obj))];
}
