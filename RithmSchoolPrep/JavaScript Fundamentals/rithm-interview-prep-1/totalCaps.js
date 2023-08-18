// add whatever parameters you deem necessary - good luck!
function totalCaps(arr) {
  // initialize capitalCount
  let capitalCount = 0;
  // iterate over the element of arr
  for (let el of arr) {
    // declare capsMatch
    let capsMatch = el.match(/[A-Z]/g);
    // add capsMatch length to capitalCount
    if (capsMatch !== null) {
      capitalCount += capsMatch.length;
    }
  }
  // return capitalCount
  return capitalCount;
}

console.log(totalCaps(["AwesomE", "ThIngs", "hAppEning", "HerE"])); // 8
console.log(totalCaps(["Elie", "Matt", "Tim"])); // 3
console.log(totalCaps(["hello", "world"])); // 0
