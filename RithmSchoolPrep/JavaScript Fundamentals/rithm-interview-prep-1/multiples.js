// add whatever parameters you deem necessary - good luck!
function multiples(value, multiplier) {
  // initialize output array
  let multiples = [];
  // loop multiplier times starting at 1
  for (let i = 1; i <= multiplier; i++) {
    // push product of value * index to output
    multiples.push(value * i);
  }
  // return output
  return multiples;
}

console.log(multiples(3, 4)); // [3, 6, 9, 12]
console.log(multiples(2, 5)); // [2, 4, 6, 8, 10]
