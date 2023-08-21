function findFirstAndLastIndex(array, target) {
  // initialize firstIdx as array.indexOf(target)
  let firstIdx = array.indexOf(target);

  // initialize lastIdx as array.lastIndexOf(target)
  let lastIdx = array.lastIndexOf(target);

  // check if lastIdx is -1 or same as firstIdx
  if (lastIdx === firstIdx || lastIdx === -1) {
    // if so, return -1
    return -1;
  } else {
    // else, return [firstIdx, lastIdx]
    return [firstIdx, lastIdx];
  }
}

console.log(findFirstAndLastIndex([1, 2, 3, 4, 5], 3)); // -1
console.log(findFirstAndLastIndex([1, 2, 2, 2, 5], 12)); // -1
console.log(findFirstAndLastIndex([1, 2, 2, 2, 5], 2)); // [1, 3]
