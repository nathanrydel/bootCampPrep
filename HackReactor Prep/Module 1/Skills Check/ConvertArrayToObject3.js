// 1
// Convert Array To Object 3
// Write a function called "transformEmployeeData" that transforms some employee data from one format to another.

// The argument will look like this:

var input = [
  [
    ["firstName", "Joe"],
    ["lastName", "Blow"],
    ["age", 42],
    ["role", "clerk"],
  ],
  [
    ["firstName", "Mary"],
    ["lastName", "Jenkins"],
    ["age", 36],
    ["role", "manager"],
  ],
];
// Given that input, the return value should look like this:

// [
//     {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
//     {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
// ]
// Note that the input may have a different number of rows or different keys than the given sample.

// For example, let's say the HR department adds a "tshirtSize" field to each employee record. Your code should flexibly accommodate that.

function transformEmployeeData(employeeData) {
  // declare employees array
  const employees = [];

  // iterate over the arrays of employeeData
  for (let array of employeeData) {
    // make an object from the contents of the employee array
    const obj = Object.fromEntries(array);
    // push that employee to employees
    employees.push(obj);
  }
  // return employees;
  return employees;
}

var output = transformEmployeeData(input);
console.log(output);

function transformEmployeeData2(employeeData) {
  // declare employees array
  const employees = [];

  // iterate over employeeData array
  for (let i = 0; i < employeeData.length; i++) {
    // declare a personArr to store the array
    const personArr = employeeData[i];
    // declare an empty personObj
    const personObj = {};
    // iterate over the the personArr
    for (let j = 0; j < personArr.length; j++) {
      // declare a key and assign to position 1 of personArr
      let key = personArr[j][0];
      // declare a value and assign the position 2 of personArr
      let value = personArr[j][1];
      // update personObj at key with value
      personObj[key] = value;
    }
    // push personObj to employees
    employees.push(personObj);
  }
  // return employees;
  return employees;
}

var output2 = transformEmployeeData2(input);
console.log(output2);
