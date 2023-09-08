// ### scheduleCheck

// Write a function called `scheduleCheck` which accepts two objects which have a key for each day of the week and a value that is either true or false. The function should return the number of days of the week that both objects have a value of true for.

function scheduleCheck(schedule1, schedule2) {
  // initialize tracker to 0
  let tracker = 0;
  // iterate over the keys in schedule1
  for (let key in schedule1) {
    // check if value of key in schedule1 equals the same key in schedule2
    if (schedule1[key] === schedule2[key]) {
      // if so, increment tracker
      tracker++;
    }
  }
  return tracker;
}

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
