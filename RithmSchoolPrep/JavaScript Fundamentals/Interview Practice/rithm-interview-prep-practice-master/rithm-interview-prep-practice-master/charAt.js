// Write a function called **charAt** which accepts a string and an index (number) and returns the character at that index.

// The function should return an empty string if the number is greater than the length of the string.

// **Do not use the built in charAt method**

function charAt(str, idx) {
  if (idx >= str.length) {
    return "";
  }
  return str[idx];
}

console.log(charAt("awesome", 2)); // 'e'
console.log(charAt("awesome", 12)); // ''
