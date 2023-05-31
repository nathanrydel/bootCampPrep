let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes: "https://www.devtopics.com/best-programming-jokes/",
};

// Write the command to add the language “Go” to the end of the languages array.
programming.languages.push("Go");
console.log(programming.languages);

// Change the difficulty to the value of 7.
programming.difficulty = 7;
console.log(programming.difficulty);

// Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;
console.log(programming.jokes);

// Write the command to add a new key called isFun and a value of true to the programming object.
programming.isFun = true;
console.log(programming.isFun);

// Using a loop, iterate through the languages array and console.log all of the languages.
for (const language of programming.languages) {
  console.log(language);
}

// Using a loop, console.log all of the keys in the programming object.
for (const key in programming) {
  console.log(key);
}
// Using a loop, console.log all of the values in the programming object.
for (const values in programming) {
  console.log(programming[values]);
}
