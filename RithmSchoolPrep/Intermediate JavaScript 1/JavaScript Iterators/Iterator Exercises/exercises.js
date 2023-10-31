let users = [
  {
    username: 'larry',
    email: 'larry@foo.com',
    yearsExperience: 22.1,
    favoriteLanguages: ['Perl', 'Java', 'C++'],
    favoriteEditor: 'Vim',
    hobbies: ['Fishing', 'Sailing', 'Hiking'],
    hometown: {
      city: 'San Francisco',
      state: 'CA'
    }
  },
  {
    username: 'jane',
    email: 'jane@test.com',
    yearsExperience: 33.9,
    favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
    favoriteEditor: 'Emacs',
    hobbies: ['Swimming', 'Biking', 'Hiking'],
    hometown: {
      city: 'New York',
      state: 'NY'
    }
  },
  {
    username: 'sam',
    email: 'sam@test.com',
    yearsExperience: 8.2,
    favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
    favoriteEditor: 'Atom',
    hobbies: ['Golf', 'Cooking', 'Archery'],
    hometown: {
      city: 'Fargo',
      state: 'SD'
    }
  },
  {
    username: 'anne',
    email: 'anne@test.com',
    yearsExperience: 4,
    favoriteLanguages: ['C#', 'C++', 'F#'],
    favoriteEditor: 'Visual Studio Code',
    hobbies: ['Tennis', 'Biking', 'Archery'],
    hometown: {
      city: 'Albany',
      state: 'NY'
    }
  },
  {
    username: 'david',
    email: 'david@test.com',
    yearsExperience: 12.5,
    favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
    favoriteEditor: 'VS Code',
    hobbies: ['Volunteering', 'Biking', 'Coding'],
    hometown: {
      city: 'Los Angeles',
      state: 'CA'
    }
  }
];

/**
 * Console log each user's email
 * @param {Object[]} users - An array of objects to manipulate
 * @return {string} - a string of the user emails
 */

function printEmails(users) {
  users.forEach((user) => {
    console.log(user.email);
  });
}

// console.log(printEmails(users));

/**
 * Console log each user's hobbies on individual lines
 * @param {Object[]} users - An array of objects to manipulate
 * @returns {string} - each hobby
 */

function printHobbies(users) {
  users.forEach((user) => {
    user.hobbies.forEach((hobby) => {
      console.log(hobby);
    });
  });
}

console.log(printHobbies(users));

/**
 * Return the first user which has a hometown in the desired state
 * @param {string} state - The state to search
 * @returns {Object|null} - The first user with a matching state
 */

function findHomeTownByState(state) {
  return users.find(user => user.hometown && user.hometown.state === state) || null;
}

/**
 * Return an array of all unique values
 * @returns {string[]} - The unique values of the languages
 */

function allLanguages() {
  const uniqueLangs = users.reduce((languages, user) => {
    user.favoriteLanguages.forEach(language => {
      if (!languages.includes(language)) {
        languages.push(language);
      }
    });
    return languages;
  }, []);
  return uniqueLangs;
}

/**
 * Check if any of the users have the specified favorite editor.
 * @param {string} editor - The editor to check for.
 * @returns {boolean} - True if any user has the specified editor, false otherwise.
 */

function hasFavoriteEditor(editor) {
  return users.some(user => user.favoriteEditor === editor);
}

// Example usage
console.log(hasFavoriteEditor('VS Code')); // true
console.log(hasFavoriteEditor('Eclipse')); // false

/**
 * Find a user object in the 'users' array with the specified username.
 * @param {string} username - The username to search for.
 * @returns {Object|null} - The user object with the specified username or null if not found.
 */
function findByUsername(username) {
  return users.find(user => user.username === username) || null;
}

// Example usage
const foundUser = findByUsername('david');
console.log(foundUser);

/**
 * Count the occurrences of each vowel in a string and return an object.
 * @param {string} str - The input string.
 * @returns {Object} - An object with vowels as keys and their counts as values.
 */
function vowelCount(str) {
  const vowels = 'aeiouAEIOU'; // Include both lowercase and uppercase vowels.
  const counts = {};

  for (let char of str) {
    if (vowels.includes(char)) {
      char = char.toLowerCase(); // Normalize to lowercase.
      counts[char] = (counts[char] || 0) + 1;
    }
  }

  return counts;
}

console.log(vowelCount('incredible')); // { i: 2, e: 2 }
console.log(vowelCount('awesome'));    // { a: 1, e: 2, o: 1 }

/**
 * Remove vowels from a string and return an array of non-vowel characters.
 * @param {string} str - The input string.
 * @returns {string[]} - An array of characters that are not vowels.
 */
function removeVowels(str) {
  const vowels = 'aeiouAEIOU'; // Include both lowercase and uppercase vowels.
  const result = [];

  for (let char of str) {
    if (!vowels.includes(char)) {
      result.push(char);
    }
  }

  return result;
}

console.log(removeVowels('amazing')); // ["m", "z", "n", "g"]
console.log(removeVowels('fun'));     // ["f", "n"]
console.log(removeVowels('silly'));   // ["s", "l", "l", "y"]
