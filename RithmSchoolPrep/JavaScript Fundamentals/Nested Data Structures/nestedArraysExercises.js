// Write a function called rotate which takes an array and a number, and moves each element however many spaces the number is to the right. For the value at the end of the array, rotate should move it back to the beginning.

function rotate(arr, val) {
  if (arr.length === 0 || val === 0) {
    return arr;
  }
  let rotateValue = val % arr.length;
  for (let i = 0; i < rotateValue; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}

console.log(rotate([1, 2, 3], 1)); // [3,1,2]
console.log(rotate([1, 2, 3], 2)); // [2,3,1]
console.log(rotate([1, 2, 3], 3)); // [1,2,3]

console.log; // Write a function called makeXOGrid (which takes in tw)o parameters, rows and columns, and returns an array of arrays with the number of values in each subarray equal to the columns parameter and the number of subarrays equal to the rows parameter. The values in the sub-arrays should switch between "X" and "O".

function makeXOGrid(rows, columns) {
  // declare new output array
  let outputGrid = [];
  // iterate for number of rows
  for (let i = 0; i < rows; i++) {
    // create a new row for each row
    let newRow = [];
    // track if row starts with X or not
    let startsWithX = true;
    for (let j = 0; j < columns; j++) {
      if (startsWithX) {
        newRow.push("X");
      } else {
        newRow.push("O");
      }
      startsWithX = !startsWithX;
    }
    outputGrid.push(newRow);
  }
  return outputGrid;
}

console.log(makeXOGrid(1, 4));

/*/
[["X","O","X","O"]]
/*/

console.log(makeXOGrid(3, 2));

/*/
[["X","O"],["X","O"],["X","O"]]
/*/

console.log(makeXOGrid(3, 3));
/*/
[["X","O","X"],["O","X","O"],["X","O","X"]]
/*/
