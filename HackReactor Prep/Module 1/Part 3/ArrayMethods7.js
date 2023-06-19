// 1
// joinThreeArrays
// Write a function called "joinThreeArrays".

// Given three arrays, "joinThreeArrays" returns an array with the elements of "arr1" in order followed by the elements in "arr2" in order followed by the elements of "arr3" in order.

var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output); // --> [1, 2, 3, 4, 5, 6]

// You should be familiar with the "concat" method for this problem.

function joinThreeArrays(arr1, arr2, arr3) {
  return arr1.concat(arr2, arr3);
}

// 2
// addToFrontOfNew
// Write a function called "addToFrontOfNew".

// Given an array and an element, "addToFrontOfNew" returns a new array containing all the elements of the given array, with the given element added to the front.

// Important: It should be a NEW array instance, not the original array instance.

var input2 = [1, 2];
var output2 = addToFrontOfNew(input2, 3);
console.log(output2); // --> [3, 1, 2];
console.log(input2); // --> [1, 2]

function addToFrontOfNew(arr, element) {
  // your code here
  let copyArr = arr.slice();
  copyArr.unshift(element);
  return copyArr;
}

// 3
// addToBackOfNew
// Write a function called "addToBackOfNew".

// Given an array and an element, "addToBackOfNew" returns a clone of the given array, with the given element added to the end.

// Important: It should be a NEW array instance, not the original array instance.

var input3 = [1, 2];
var output3 = addToBackOfNew(input3, 3);
console.log(input3); // --> [1, 2]
console.log(output3); // --> [1, 2, 3]

function addToBackOfNew(arr, element) {
  // your code here
  let copyArr = arr.slice();
  copyArr.push(element);
  return copyArr;
}

// 4
// getAllElementsButNth
// Write a function called "getAllElementsButNth".

// Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth.

var output4 = getAllElementsButNth(["a", "b", "c"], 1);
console.log(output4); // --> ['a', 'c']

function getAllElementsButNth(array, n) {
  // your code here
  array.splice(n, 1);
  return array;
}
