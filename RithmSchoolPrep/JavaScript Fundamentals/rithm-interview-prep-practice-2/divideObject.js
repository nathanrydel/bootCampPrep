function divideObject(obj) {
  // initialize numSum
  let numSum = 0;
  // initialize charCount
  let charCount = 0;
  // iterate over key in object
  for (let key in obj) {
    // check if value is a number
    if (typeof obj[key] === "number") {
      // if so, add to numSum
      numSum += obj[key];
    } else {
      // else, add length to charCount
      charCount += obj[key].length;
    }
  }
  // return [[numSum], [charCount]]
  return [[numSum], [charCount]];
}

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
