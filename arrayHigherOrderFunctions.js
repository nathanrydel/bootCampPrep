const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

//***MAP***
//1. Get array of all names
const allNames = characters.map((character) => character.name);
console.log(allNames);
//2. Get array of all heights
const allHeights = characters.map((character) => character.height);
console.log(allHeights);
//3. Get array of objects with just name and height properties
const nameAndHeight = characters.map((character) => {
  return { name: character.name, height: character.height };
});
console.log(nameAndHeight);
//4. Get array of all first names
const firstNames = characters.map((character) => character.name.split(" ")[0]);
console.log(firstNames);

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce(
  (mass, character) => mass + character.mass,
  0,
);
console.log(totalMass);
//2. Get total height of all characters
const totalHeight = characters.reduce(
  (height, character) => height + character.height,
  0,
);
console.log(totalHeight);
//3. Get total number of characters by eye color
const totalByEyeColor = characters.reduce((total, character) => {
  const color = character.eye_color;
  if (total[color]) {
    total[color]++;
  } else {
    total[color] = 1;
  }
  return total;
}, {});
console.log(totalByEyeColor);
//4. Get total number of characters in all the character names
const totalNumOfChars = characters.reduce(
  (charNum, character) => charNum + character.name.length,
  0,
);
console.log(totalNumOfChars);

//***FILTER***
//1. Get characters with mass greater than 100
const massGreaterThan100 = characters.filter(
  (character) => character.mass > 100,
);
console.log(massGreaterThan100);
//2. Get characters with height less than 200
const shorterThan200 = characters.filter((character) => character.height < 200);
console.log(shorterThan200);
//3. Get all male characters
const maleCharacters = characters.filter(
  (character) => character.gender === "male",
);
console.log(maleCharacters);
//4. Get all female characters
const femaleCharacters = characters.filter(
  (character) => character.gender === "female",
);
console.log(femaleCharacters);

//***SORT***
//1. Sort by mass
const byMass = characters.sort((a, b) => a.mass - b.mass);
console.log(byMass);
//2. Sort by height
const byHeight = characters.sort((a, b) => a.height - b.height);
console.log(byHeight);
//3. Sort by name
const byName = characters.sort((a, b) => {
  if (a.name < b.name) return -1;
  return 1;
});
console.log(byName);
//4. Sort by gender
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const byGender = characters.sort((a, b) => {
  if (a.gender === "female") return -1;
  return 1;
});
console.log(byGender);

//***EVERY***
//1. Does every character have blue eyes?
const allBlue = characters.every((character) => character.eye_color === "blue");
console.log(allBlue);
//2. Does every character have mass more than 40?
const allOver40Mass = characters.every((character) => character.mass >= 40);
console.log(allOver40Mass);
//3. Is every character shorter than 200?
const allShorter200 = characters.every((character) => character.height < 200);
console.log(allShorter200);
//4. Is every character male?
const allMale = characters.every((character) => character.gender === "male");
console.log(allMale);

//***SOME***
//1. Is there at least one male character?
const atLeastOneMale = characters.some(
  (character) => character.gender === "male",
);
console.log(atLeastOneMale);
//2. Is there at least one character with blue eyes?
const atLeastOneBlueEyes = characters.some(
  (character) => character.eye_color === "blue",
);
console.log(atLeastOneBlueEyes);
//3. Is there at least one character taller than 210?
const atLeastOneTaller210 = characters.some(
  (character) => character.height > 210,
);
console.log(atLeastOneTaller210);
//4. Is there at least one character that has mass less than 50?
const atLeastOneMassLess50 = characters.some(
  (character) => character.mass < 50,
);
console.log(atLeastOneMassLess50);
