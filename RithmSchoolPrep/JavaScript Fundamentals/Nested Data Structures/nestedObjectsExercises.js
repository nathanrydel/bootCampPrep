// Given the following nested object:

let nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
      primeNumbers: [2, 3, 5, 7, 11],
      fibonnaci: [1, 1, 2, 3, 5, 8, 13],
    },
    addSnack: function (snack) {
      nestedData.innerData.snacks.push(snack);
      return nestedData.innerData.snacks;
    },
  },
};

// Using a for loop, console.log all of the numbers in the primeNumbers array.
for (let i = 0; i < nestedData.innerData.numberData.primeNumbers.length; i++) {
  console.log(nestedData.innerData.numberData.primeNumbers[i]);
}

// Using a for loop, console.log all of the even Fibonnaci numbers.
for (let i = 0; i < nestedData.innerData.numberData.fibonnaci.length; i++) {
  if (nestedData.innerData.numberData.fibonnaci[i] % 2 === 0) {
    console.log(nestedData.innerData.numberData.fibonnaci[i]);
  }
}
// Console.log the value “second” inside the order array.
console.log(nestedData.innerData.order[1]);
// Invoke the addSnack function and add the snack “chocolate”.
nestedData.innerData.addSnack("chocolate");
console.log(nestedData.innerData.snacks);

// Given the following nested object:

let nestedObject = {
  speakers: [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000,
          },
        },
      },
    },
    languages: {
      spanish: {
        hello: "Hola",
      },
      french: {
        hello: "Bonjour",
      },
    },
  },
};

// Write a function addSpeaker to add a speaker to the array of speakers. The speaker you add must be an object with a key of name and a value of whatever you’d like.

function addSpeaker(speaker) {
  nestedObject.speakers.push({ name: speaker });
}

addSpeaker("Ivan");
console.log(nestedObject.speakers);

// Write a function addLanguage that adds a language to the languages object. The language object you add should have a key with the name of the language and the value of another object with a key of “hello” and a value of however you spell “hello” in the language you add.

function addLanguage(language, spelling) {
  nestedObject.data.languages[language] = { hello: spelling };
}

addLanguage("German", "Halo");
console.log(nestedObject.data.languages);

// Write a function addCountry that adds a European country to the countries object (inside of the continents object, inside of the countries object). The country you add should be an object with the key as name of the country and the value as an object with the keys of “capital” and “population” and their respective value.

function addCountry(country, cap, pop) {
  nestedObject.data.continents.europe.countries[country] = {
    capital: cap,
    population: pop,
  };
}

addCountry("USA", "DC", "330 Million");
console.log(nestedObject.data.continents.europe);
