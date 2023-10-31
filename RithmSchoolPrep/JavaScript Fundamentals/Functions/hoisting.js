sayHi("Matt"); // "Hello Matt"

function sayHi(name) {
  return "Hello " + name;
}

// sayHiAgain("Matt"); // Throws an error!

let sayHiAgain = function (name) {
  return "Hello " + name;
};

sayHiAgain("Matt");

/*
function findLowest(values) {
  let lowestNumber = Number.Positive_Infinity // start with the highest possible number
  for(let val of values){
      if (isNaN(val)) {
          console.log(`not a number: ${val}`);
      } else {
          if (val < lowestNumber){
              lowestNumber = val
          }
      }
  }
  return lowestNumber;
}
*/

function trueIfNum(num) {
  if (isNaN(num)) {
    console.log(`not a number: ${num}`);
    return false;
  } else {
    return true;
  }
}

function findLowest(values) {
  let lowestNumber = Number.Positive_Infinity; // start with the highest possible number
  for (let val of values) {
    if (trueIfNum(val) && val < lowestNumber) {
      lowestNumber = val;
    }
  }
  return lowestNumber;
}

const values = [62, 32, 66, 44, 123, 87, 99, 44];

console.log(findLowest(values)); // 32
