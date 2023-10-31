// add whatever parameters you deem necessary - good luck!
function appendToString(str1, str2) {
  return str1 + str2;
}

console.log(appendToString("Hello", " World!")); // "Hello World!"
console.log(appendToString("Foo", "bar")); // "Foobar"
console.log(appendToString("bar", "Foo")); // "barFoo"
console.log(appendToString("", "test")); // "test"
console.log(appendToString("other test", "")); // "other test"
