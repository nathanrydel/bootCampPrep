// ### separateLanguages

// Write a function called `separateLanguages` which which takes an array of strings and returns an object with the following keys: "python", "javascript", "other". The values for the keys of "python" and "javascript" should be the number of times those strings appear. The value of "other" should be an array of all of the other values in the array.

// Examples:

console.log(
  separateLanguages(["python", "python", "python", "javascript", "c++"]),
);
/*
{
  python: 3,
  javascript: 1,
  other: ["c++"],
}
*/

console.log(separateLanguages(["python", "python", "spanish", "javascript"]));
/*
  python: 2,
  javascript: 1,
  other: ["spanish"],
}
*/
console.log(separateLanguages(["greek", "french", "yoruba", "python"]));
/*
{
  python: 1,
  javascript: 0,
  other: ["greek", "french", "yoruba"],
}
*/

// input: array of strings
// output: object with python: number, javascript: number, and other: array

// declare a function separateLanguages with languages: array as parameter

function separateLanguages(languages) {
  // initialize langObj
  // define properties python: 0, javascript: 0, other: []
  const langObj = {
    python: 0,
    javascript: 0,
    other: [],
  };

  // iterate over languages
  for (let language of languages) {
    // check if language is python
    if (language === "python") {
      // if so, increment langObj.python
      langObj.python++;
    } else if (language === "javascript") {
      // else if, language is javascript
      // if so increment langObj.javascript
      langObj.javascript++;
    } else {
      // else, push to langObj.other
      langObj.other.push(language);
    }
  }
  // return langObj;
  return langObj;
}
