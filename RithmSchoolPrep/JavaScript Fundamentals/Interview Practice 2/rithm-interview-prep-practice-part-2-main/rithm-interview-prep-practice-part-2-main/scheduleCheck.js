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

scheduleCheck(schedule1, schedule2); // 7;

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

scheduleCheck(schedule3, schedule4); // 6;

function scheduleCheck() {
  // add whatever parameters you deem necessary - good luck!
}
