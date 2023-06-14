// ### divideObject

// Write a function called `divideObject` that accepts an object where the values are either strings or numbers. The function should return an array of arrays. The first subarray should contain a total of all of the numbers and the second subarray should contain a number which is the total of all the characters of all the strings.

// Examples:

console.log(
  divideObject({
    first: "hi",
    second: "hello",
    third: "hey",
    fourth: 2,
    fifth: "fun",
    sixth: 10,
  }),
);
// [ [12], [13] ]

function divideObject(obj) {
  // declare numSum
  let numSum = 0;
  // declare stringSum
  let stringSum = 0;
  // iterate over the keys in obj
  for (let key in obj) {
    // check if typeof value is a string
    if (typeof obj[key] === "string") {
      // if yes, add the string length to stringSum
      stringSum += obj[key].length;
    } else {
      // else add to numSum
      numSum += obj[key];
    }
  }

  // return [ [numSum], [stringSum]];
  return [[numSum], [stringSum]];
}
