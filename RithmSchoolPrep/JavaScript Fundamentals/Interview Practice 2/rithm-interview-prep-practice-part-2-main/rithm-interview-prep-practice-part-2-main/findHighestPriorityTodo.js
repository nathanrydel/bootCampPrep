// ### findHighestPriorityTodo

// Write a function called `findHighestPriorityTodo` which accepts an array of objects, each of which has a 'priority' property as well as a 'task' property. The function should return an array where the first index is the name of the highest priority task and the second index is the priority rating of that same task.

// Examples:

let todos1 = [
  {
    task: "Eat",
    priority: 18,
  },
  {
    task: "Sleep",
    priority: 22,
  },
  {
    task: "Solve problems",
    priority: 17,
  },
];

findHighestPriorityTodo(todos1); // ["Sleep", 22]

let todos2 = [
  {
    task: "Task 1",
    priority: 1,
  },
  {
    task: "Task 2",
    priority: 2,
  },
  {
    task: "Task 3",
    priority: 3,
  },
];

findHighestPriorityTodo(todos2); // ["Task 3", 3]

function findHighestPriorityTodo(todos) {
  // add whatever parameters you deem necessary - good luck!
}
