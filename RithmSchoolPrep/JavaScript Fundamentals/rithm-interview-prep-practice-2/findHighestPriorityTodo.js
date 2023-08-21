function findHighestPriorityTodo(todos) {
  // initialize highestPriority
  let highestPriority = 0;
  // intiailize highestTask as empty string
  let highestTask = "";
  // iterate over the object of todos
  for (let todo of todos) {
    // check if taskPriority > highestPriority
    if (todo.priority > highestPriority) {
      // if so, update highestPriority to taskPriority
      //  update highestTask to taskName
      highestPriority = todo.priority;
      highestTask = todo.task;
    }
  }
  // return [highestTask, highestPriority];
  return [highestTask, highestPriority];
}

let todos = [
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

console.log(findHighestPriorityTodo(todos)); // ["Sleep", 22]

let todos1 = [
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

console.log(findHighestPriorityTodo(todos1)); // ["Task 3", 3]
