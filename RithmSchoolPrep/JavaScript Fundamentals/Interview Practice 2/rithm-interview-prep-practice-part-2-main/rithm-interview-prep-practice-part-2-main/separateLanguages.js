// ### separateLanguages

// Write a function called `separateLanguages` which which takes an array of strings and returns an object with the following keys: "python", "javascript", "other". The values for the keys of "python" and "javascript" should be the number of times those strings appear. The value of "other" should be an array of all of the other values in the array.

// Examples:

separateLanguages(["python", "python", "python", "javascript", "c++"]);
/*
{
  python: 3,
  javascript: 1,
  other: ["c++"],
}
*/

separateLanguages(["python", "python", "spanish", "javascript"]);
/*
  python: 2,
  javascript: 1,
  other: ["spanish"],
}
*/
separateLanguages(["greek", "french", "yoruba", "python"]);
/*
{
  python: 1,
  javascript: 0,
  other: ["greek", "french", "yoruba"],
}
*/

function separateLanguages() {
  // add whatever parameters you deem necessary - good luck!
}
