sayHi("Matt"); // "Hello Matt"

function sayHi(name) {
  return "Hello " + name;
}

sayHiAgain("Matt"); // Throws an error!

let sayHiAgain = function (name) {
  return "Hello " + name;
};

/*
function findLowest(values) {
  let lowestNumber = Infinity // start with the highest possible number
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
  let lowestNumber = Infinity; // start with the highest possible number
  for (let val of values) {
    if (trueIfNum(val) && val < lowestNumber) {
      lowestNumber = val;
    }
  }
  return lowestNumber;
}
