// ### separateLanguages

// Write a function called `separateLanguages` which which takes an array of strings and returns an object with the following keys: "python", "javascript", "other". The values for the keys of "python" and "javascript" should be the number of times those strings appear. The value of "other" should be an array of all of the other values in the array.

function separateLanguages(arrayOfLanguages) {
  // initialize languages object literal and pre-populate required values
  let languages = {
    python: 0,
    javascript: 0,
    other: [],
  };

  // iterate over the languages of array
  for (let language of arrayOfLanguages) {
    // if language in languages object
    if (language in languages) {
      // increment value
      languages[language]++;
    } else {
      // else, push to others array
      languages.other.push(language);
    }
  }
  return languages;
}

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
