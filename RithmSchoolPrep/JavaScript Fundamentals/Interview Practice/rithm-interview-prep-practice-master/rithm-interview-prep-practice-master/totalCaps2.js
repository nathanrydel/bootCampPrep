// ### totalCaps

// Write a function called **totalCaps,** which accepts an array of strings and returns the total number of capitals in each of the strings. Do **not** convert the array into a string.

// Examples:

console.log(totalCaps(["AwesomE", "ThIngs", "hAppEning", "HerE"])); // 8
console.log(totalCaps(["Elie", "Matt", "Tim"])); // 3
console.log(totalCaps(["hello", "world"])); // 0

// input: array (of strings)
// output: number (of capitals)

// add whatever parameters you deem necessary - good luck!
function totalCaps(array) {
  // declare totalCount
  let totalCount = 0;
  // iterate thru elements of array
  for (let ele of array) {
    // add evaluated result of calling capCounter on element to totalCounter
    totalCount += capCounter(ele);
  }
  // return totalCount
  return totalCount;
}

// declare a helper function, capCounter, and passin a string
function capCounter(string) {
  // declare counter
  let counter = 0;
  // declare cap variable
  const caps = "ABCDEFGHIJKLMNOPQRSTUVXYZ";

  // iterate thru char of string
  for (let char of string) {
    // check if string includes char
    if (caps.includes(char)) {
      // if so, increment count
      counter++;
    }
  }
  // return counter;
  return counter;
}
