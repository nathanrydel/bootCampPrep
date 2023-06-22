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

console.log(findHighestPriorityTodo(todos1)); // ["Sleep", 22]

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

console.log(findHighestPriorityTodo(todos2)); // ["Task 3", 3]

// input: array of objects
// ouput: Array of task value, priorty value

function findHighestPriorityTodo(todos) {
  // initialize highestPriority and set to -Number.Positive_Infinity
  let highestPriority = -Number.Positive_Infinity;
  // initialize highestTask and set to empty string
  let highestTask = "";

  // iterate over each object of todos
  for (const todo of todos) {
    // check if todo.priority > highestPriority
    if (todo.priority > highestPriority) {
      // if so update highestPriority and highestTask
      highestPriority = todo.priority;
      highestTask = todo.task;
    }
  }
  // return [highestTask, highestPriority];
  return [highestTask, highestPriority];
}
