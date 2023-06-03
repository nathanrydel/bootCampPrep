Exercises
Write a function called displayCities that console.logs all the values in the citiesLivedIn array:

displayCities();

// "Seattle"
// "Providence"
// "New York"
Write a function called displayHometownData that console.logs all the values inside of the hometown object

displayHometownData();

// "West Orange"
// "NJ"
Let’s write a function called addDetail that accepts two parameters, a key and a value and adds the key and value to the moreDetails object and returns the moreDetails object

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

removeDetail('citiesLivedIn');
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
removeDetail('hometown');
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true
}
*/
removeDetail('favoriteBasketballTeam');
/*
{
    numberOfSiblings: 3,
    isYoungest: true
}
*/