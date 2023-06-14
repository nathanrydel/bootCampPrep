// ### scheduleCheck

// Write a function called `scheduleCheck` which accepts two objects which have a key for each day of the week and a value that is either true or false. The function should return the number of days of the week that both objects have a value of true for.

// Examples:

let schedule1 = {
  Monday: true,
  Tuesday: true,
  Wednesday: true,
  Thursday: true,
  Friday: true,
  Saturday: true,
  Sunday: true,
};
let schedule2 = {
  Monday: true,
  Tuesday: true,
  Wednesday: true,
  Thursday: true,
  Friday: true,
  Saturday: true,
  Sunday: true,
};

console.log(scheduleCheck(schedule1, schedule2)); // 7;

let schedule3 = {
  Monday: true,
  Tuesday: true,
  Wednesday: true,
  Thursday: true,
  Friday: true,
  Saturday: true,
  Sunday: true,
};
let schedule4 = {
  Monday: true,
  Tuesday: true,
  Wednesday: true,
  Thursday: true,
  Friday: true,
  Saturday: false,
  Sunday: true,
};

console.log(scheduleCheck(schedule3, schedule4)); // 6;

function scheduleCheck(obj1, obj2) {
  // declare match counter
  let count = 0;
  // iterate over obj1 keys
  for (let key in obj1) {
    // check if value of key at obj1 AND obj2 are true
    if (obj1[key] === true && obj2[key] === true) {
      // if so, increment count
      count++;
    }
  }
  // return count;
  return count;
}
