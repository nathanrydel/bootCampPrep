function countValidNumsInString(string) {
  // initialize counter
  let counter = 0;
  // iterate over char of string
  for (let char of string) {
    // check if parseInt of char is not NaN
    // if so, update counter
    if (!isNaN(parseInt(char))) counter++;
  }
  // return counter
  return counter;
}

console.log(countValidNumsInString("")); // 0
console.log(countValidNumsInString("1")); // 1
console.log(countValidNumsInString("12")); // 2
console.log(countValidNumsInString("12abc3")); // 3
console.log(countValidNumsInString("1s2d3dsadas4")); // 4
console.log(countValidNumsInString("512,3,4!?!")); // 5
console.log(countValidNumsInString("123456")); // 6
