// Declare a function 'NumArray', which takes in at most two arguments (length and initialValue) and returns an instance of a 'NumArray' object when invoked with the 'new' keyword. NumArray should function similarly to arrays - i.e. they will store values at numbered indexes, starting at 0. All NumArray objects should contain their own 'length' property to keep track of the number of elements in the array. When a NumArray is first created, it should initialize the length property to the length passed-in and set all values to the initial value passed-in (if the initial value is not provided, initialize all values to 0), and if the length is not passed-in, initialize the length property to 0.
// - Task 1: Declare a function 'addAt', which is accessible to ALL instances of 'NumArray'. 'addAt' should take in two arguments (an index and a value), and when invoked on a NumArray instance, should add the value to that NumArray at the passed-in index. Update the NumArray's length property appropriately and return the length of the NumArray.
// - Task 2: Declare a function 'applyFunc', which is accessible to ALL instances of 'NumArray'. 'applyFunc' should take in a callback function as a single argument, and when invoked on a NumArray instance, should run the callback on every element in the NumArray (except the length) and return an instance of NumArray.
// - Task 3: Declare a function 'removeFrom', which is accessible to ALL instances of 'NumArray'. 'removeFrom' should take in at most two arguments (an index and a number K), and when invoked on a NumArray instance, should remove K elements from the NumArray starting from the index (inclusive). If the number K is not passed-in, remove only one element at the index. Remember to update the length property properly.

// define a class NumArray
class NumArray {
  // declare class fields of length and initialValue = 0;
  length;
  initialValue = 0;
  // declare constructor function that takes length: number and initalValue: number
  constructor(length, initialValue) {
    // initialize the length property
    this.length = length;
    // initialize the values as an empty array
    this.values = [];
    // iterate thru the length
    for (let i = 0; i < this.length; i++) {
      this.values.push(initialValue);
    }
  }

  // declare a function addAt that access the class prototype
  // pass in index: number & value: number
  addAt(index, value) {
    // check if index is out of bounds
    if (index < 0 || index > this.length) {
      throw new Error("Index value is out of bounds");
    }
    // insert the value at given index using splice
    this.values.splice(index, 0, value);
    // update length property
    this.length++;
    // return length
    return this.length;
  }

  // declare a function applyFunc on the class and pass in a callback: function
  applyFunc(callback) {
    // apply callback on all elements execpt the length property
    for (let i = 0; i < this.length; i++) {
      // check if i !== 'length'
      if (i !== "length") {
        // if so, perform callback
        this.values[i] = callback(this.values[i]);
      }
    }
    // return a new NumArray instance
    return new NumArray(this.length);
  }

  // declare a function removeFrom on the class & pass in index: number & K: number with a default of 1
  removeFrom(index, K = 1) {
    // check if index is out of bounds
    if (index < 0 || index > this.length) {
      // if so, throw error 'Index value is out of bounds'
      throw new Error("Index value is out of bounds");
    }
    // remove K elements from index with splice
    this.values.splice(index, K);
    // update length - K
    this.length -= K;
    // return length
    return this.length;
  }
}

// Create a new NumArray with length 5 and initial value 1
const numArr = new NumArray(5, 1);

console.log(numArr.values); // Output: [1, 1, 1, 1, 1]
console.log(numArr.length); // Output: 5

numArr.addAt(2, 3);
console.log(numArr.values); // Output: [1, 1, 3, 1, 1, 1]
console.log(numArr.length); // Output: 6

numArr.applyFunc((value) => value * 2);
console.log(numArr.values); // Output: [2, 2, 6, 2, 2, 2]
console.log(numArr.length); // Output: 6

numArr.removeFrom(1, 2);
console.log(numArr.values); // Output: [2, 2, 2, 2]
console.log(numArr.length); // Output: 4
