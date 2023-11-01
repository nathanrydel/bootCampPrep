# Objectives

By the end of this chapter, you should be able to:

- Explain the process of "Red, Green, Refactor"
- Differentiate between unit and integration tests

## Let’s look at some more test code

Feel free to copy and paste this into our setup from above:

```javascript
let arr;

beforeEach(function(){
  arr = [1,3,5];
});

describe("Arrays", function(){
  describe("#push", function(){
    it("adds elements to an array", function(){
      arr.push(7);
      expect(arr).toEqual([1,3,5,7]);
    });
    it("returns the new length of the array", function(){
      expect(arr.push(7)).toBe(4);
    });
    it "adds anything into the array", function(){
      expect(arr.push({})).toBe(4);
    });
  });
});
```

There are a couple new things going on here; let’s investigate!

**beforeEach**: Sometimes before each `it` block, we want to initialize some code so that the setup before running the test is the same. In the above example, our first test mutates the `arr` array by adding the number 7 to it. Rather than having to keep track of that mutation across all subsequent tests, it’s easier to just set `arr` equal to the same array before each test runs. In other words, we should always strive to not have our tests change the data we are working with in other tests. `beforeEach` is a great way to save us from writing `arr = [1,3,5]` before every single block.

**toEqual and toBe**: When writing tests, how can we see if two arrays or objects consist of the same values? To do that in our tests we use deep.equal. Deep equality checks whether the elements in two arrays are equal, rather than simply checking if the two arrays refer to the same place in memory.

## Red, Green, Refactor

Once you get used to writing tests, you can use a workflow very common in TDD. This workflow is called "Red, Green, Refactor," and goes like this:

1. Start by writing a test. Make sure the tests fails (i.e. is red). Writing a failing test is important; if the test passes before you write any code, then what are you actually testing?
2. Go write code to make the test pass.
3. Refactor your code as needed. As long as the tests are still passing, you can be reasonably confident that you aren't introducing new bugs into the program.

Let’s walk through this process with a simple example. Suppose you wanted to write a function called `onlyStrings` which takes in an array, and returns only the elements in the array that are strings. Here are some tests you might want to write:

```javascript
describe("onlyStrings", function(){
  it("returns an array", function(){
    expect(onlyStrings([1,2,3])).toEqual(jasmine.any(Array));
  });
  it("does not change arrays of strings", function(){
    expect(onlyStrings(["a","b","c"])).toEqual(["a","b","c"]);
  });
  it("removes non-string primitives from an array", function(){
    expect(onlyStrings([1,"hi",null,"cool",undefined,"woah",false,"ok"])).toEqual(["hi","cool","woah","ok"]);
  });
  it("removes reference types from an array", function(){
    expect(onlyStrings([{},"a",[],"b",function(){},"c"])).toEqual(["a","b","c"]);
  });
});
```

After writing the tests, you would then write the `onlyStrings` function. Here's one possible implementation:

```javascript
function onlyStrings(arr) {
  let strings = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") strings.push(arr[i]);
  }
  return strings;
}
```

With this code, the tests should pass. Upon further reflection, however, you may decide to refactor this function so that it uses `filter` instead:

```javascript
function onlyStrings(arr) {
  return arr.filter(function(el) { return typeof el === "string"; });
}
```

With this implementation, the tests still pass, and you can be fairly certain that your changes to the `onlyStrings` function haven't introduced any new bugs.

## Unit vs. Integration Tests

As you're reading about testing, you're likely to come across two different kinds of tests: unit tests and integration tests. As you're first writing tests, you'll probably be writing mostly unit tests. These are tests which are written for one small component of your application, e.g. one function. They're meant to test the individual pieces, or units of your application. Integration tests, by contrast, are meant to test the system as a whole, and ensure that different pieces of the application are working correctly. The distinction isn't terribly important right now, but it's good to know what the terms mean and how they're different.
```