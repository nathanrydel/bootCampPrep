// ### collectOddsAndEvens

// Write a function called `collectOddsAndEvens` that accepts an array of positive integers and returns an object with the count of odd numbers and the count of even numbers. The keys in the object should be "odd" and "even".

// Examples:

console.log(collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// { odd: 5, even: 4, });

console.log(collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// { odd: 5, even: 5, });

console.log(collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
// { odd: 6, even: 5,});

collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
// { odd: 6, even: 6 });

collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
// { odd: 7, even: 6 });

collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
// { odd: 7, even: 7 });

collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
// { odd: 8, even: 7 });

collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
// { odd: 8, even: 8 });

// input: Array
// ouput: Object

function collectOddsAndEvens(arr) {
  // declare output object
  const output = { odd: 0, even: 0 };
  // iterate over elements of array
  for (const el of arr) {
    // check if even
    // if so, increment even
    // increment odd
    el % 2 === 0 ? output.even++ : output.odd++;
  }
  return output;
}
