function collectOddsAndEvens(array) {
  // initialize count obj literal with evens and odds
  const count = { odd: 0, even: 0 };

  // iterate over array
  array.forEach((element) => {
    // check if element is odd or even
    if (element % 2 === 0) {
      count.even++;
    } else {
      count.odd++;
    }
  });
  // return object
  return count;
}

console.log(collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// { odd: 5, even: 4, });

console.log(collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// { odd: 5, even: 5, });

console.log(collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
// { odd: 6, even: 5,});

console.log(collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
// { odd: 6, even: 6 });

console.log(collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));
// { odd: 7, even: 6 });

console.log(
  collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]),
);
// { odd: 7, even: 7 });

console.log(
  collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
);
// { odd: 8, even: 7 });

console.log(
  collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]),
);
// { odd: 8, even: 8 });
