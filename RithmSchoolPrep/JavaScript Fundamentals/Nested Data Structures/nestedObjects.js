let instructorData = {
  name: "Elie",
  additionalData: {
    instructor: true,
    favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
    moreDetails: {
      favoriteBasketballTeam: "New York Knicks",
      numberOfSiblings: 3,
      isYoungest: true,
      hometown: {
        city: "West Orange",
        state: "NJ",
      },
      citiesLivedIn: ["Seattle", "Providence", "New York"],
    },
  },
};

// Exercises
// Write a function called displayCities that console.logs all the values in the citiesLivedIn array:

function displayCities() {
  let citiesLivedIn = instructorData.additionalData.moreDetails.citiesLivedIn;
  for (let i = 0; i < citiesLivedIn.length; i++) {
    console.log(citiesLivedIn[i]);
  }
}

displayCities();

// "Seattle"
// "Providence"
// "New York"

// Write a function called displayHometownData that console.logs all the values inside of the hometown object

function displayHometownData() {
  let hometown = instructorData.additionalData.moreDetails.hometown;
  for (const key in hometown) {
    console.log(hometown[key]);
  }
}

displayHometownData();

// "West Orange"
// "NJ"

// Let’s write a function called addDetail that accepts two parameters, a key and a value and adds the key and value to the moreDetails object and returns the moreDetails object

function addDetail(key, value) {
  instructorData.additionalData.moreDetails[key] = value;
  console.log(instructorData.additionalData.moreDetails);
}

addDetail("isHilarious", true);

/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    },
    citiesLivedIn: ["Seattle", "Providence", "New York"],
    isHilarious: true
}
*/
addDetail("previousApartments", ["Mission", "North Beach", "Nob Hill"]);
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    },
    citiesLivedIn: ["Seattle", "Providence", "New York"],
    isHilarious: true
    previousApartments: ["Mission", "North Beach", "Nob Hill"]
}
*/
// Finally, let’s write a function called removeDetail that removes a key in the moreDetails object and returns the moreDetails object (the new keys added above are not included in these examples).

function removeDetail(key) {
  let moreDetails = instructorData.additionalData.moreDetails;
  // eslint-disable-next-line no-prototype-builtins
  if (moreDetails.hasOwnProperty(key)) {
    delete moreDetails[key];
    console.log(moreDetails);
  }
}

removeDetail("citiesLivedIn");
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    }
}
*/
removeDetail("hometown");
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true
}
*/
removeDetail("favoriteBasketballTeam");
/*
{
    numberOfSiblings: 3,
    isYoungest: true
}
*/
