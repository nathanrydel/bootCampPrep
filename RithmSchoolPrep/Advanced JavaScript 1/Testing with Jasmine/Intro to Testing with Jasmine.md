# Objectives

By the end of this chapter, you should be able to:

- Explain the benefits of testing code
- Explain what a test runner is
- Write unit tests with Jasmine

## Writing Tests: The Why

As you begin writing more complicated functions and larger applications, you're bound to make mistakes. Everyone does it, even professional programmers. When your programs grow, they can become more difficult to reason about, and as hard as you may try, it's impossible to predict every bug in your program. Fixing bugs also has a cost, as it can be quite easy for one fix to introduce bugs in other parts of your application.

Is there any way to avoid our programs becoming more brittle and difficult to maintain as they grow in complexity? Yes! The solution to this problem lies in testing our code as thoroughly as possible. In this chapter, you'll learn how to write tests in JavaScript that you can run automatically to verify that the code you're writing does what you expect. This makes it easier to protect against bugs and ensure that you don't introduce new bugs in your code as you add new features or rewrite old ones.

It might be difficult to appreciate the value of writing tests now, but it's a critical skill to have when you're working in a large codebase with a team of other developers. Are you down with TDD (Test Driven Development)? By the end of this chapter, hopefully you will be.

## Writing Tests: The How

Before we see some code, let's define some technologies and functions we are going to be using.

- **jasmine**: This is our test runner and expectation/assertion library. We will be using it to run all of our tests. A test runner is a tool that is responsible for running tests that you write and logging the results of the tests for you to see. You can read more about it [here](https://jasmine.github.io/). Jasmine lets you write tests so that they are quite straightforward to read.

When we write our tests, there are a few functions that we'll be using quite frequently. Here are three of the most important ones:

- `describe`: This function is given to us by Jasmine, and it is what we use to organize our tests. You can think of a `describe` function like talking to someone and telling them "let me describe ____ to you." Very often when you're writing unit tests, you'll have one `describe` block per function you're testing (this will make more sense once you've seen some examples).

- `it`: This function lives inside of `describe` functions. Inside of these `it` functions, we make our expectations. Each `it` function corresponds to a test; if one of our expectations inside of the `it` function isn't met, the test fails.

This might all sound a little strange, so before we get into a JavaScript-specific example, let's just look at an example written in plain old English. Here's how you might scaffold some tests to check whether a planet in our solar system is Earth:

```
describe "Earth"
it "is round"
it "is the third planet from the sun"
it "is the densest of all the planets"
```

- `expect`: This is a function given to us by Jasmine. When combined with `describe` and `it`, we can write tests that look something like this:

```javascript
describe "Earth"
it "is round"
expect (earth.isRound).toEqual(true)
it "is the third planet from the sun"
expect(earth.numberFromSun).toEqual(3)
it "is the densest of all the planets"
expect(earth.density).toBeGreaterThan(5.51)
```

Now that we have seen this pseudo-code, let's look at some actual test code! Here's an example of test code written in JavaScript using Jasmine:

```javascript
var earth = {
  isRound: true,
  numberFromSun: 3,
  density: 5.51
};

describe("Earth", function() {
  it("is round", function() {
    expect(earth.isRound).toEqual(true);
  });

  it("is the third planet from the sun", function() {
    expect(earth.numberFromSun).toEqual(3);
  });

  it("is the densest of all the planets", function() {
    expect(earth.density).toBeGreaterThan(5.5);
  });
});
```

Note the syntax here: both `describe` and `it` take a string as their first parameter, and a callback as the second. The callback to a `describe` typically consists of several `it` functions. Inside of each `it` function is where we write our expectations.

## Running tests in the browser

Writing tests is all well and good, but how do we actually run these tests? If you google around, you will see that most of the tests we write are in the terminal. For now, though, we are going to be using the browser (jasmine.js and jasmine.css) to run our tests.

To get started, we'll create a basic HTML page and include the relevant JavaScript and CSS files:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Our First Jasmine Tests</title>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.0.0/jasmine.css" rel="stylesheet" />
</head>
<body>
  <div id="jasmine"></div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.0.0/jasmine.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.0.0/jasmine-html.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.0.0/boot.js"></script>
</body>
</html>
```

Note that we include a div with an id of "jasmine" in the body. When we run the tests, Jasmine will display the results in this div; if you don't have an element with an id of "jasmine" on the page, an error will show up when you try to run the tests.

Before including our test code, we'll also need to do a bit of setup for Jasmine. For now, let's just create a script tag in our HTML and throw some JavaScript inside of it:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Our First Jasmine Tests</title>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.0.0/jasmine.css" rel="stylesheet" />
</head>
<body>
  <div id="jasmine"></div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.0.0/jasmine.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.0.0/jasmine-html.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.0.0/boot.js"></script>
  </body>
</html>
```

Next,

 put the tests where the comment is and refresh the page:

```html
<script>
    var earth = {
        isRound: true,
        numberFromSun: 3,
        density: 5.51
    };

    describe("Earth", function(){
        it("is round", function(){
            expect(earth.isRound).toEqual(true);
        });

        it("is the third planet from the sun", function(){
            expect(earth.numberFromSun).toEqual(3);
        });

        it("is the densest of all the planets", function(){
            expect(earth.density).toBeGreaterThan(5.50);
        });
    });
</script>
```

In practice, you won't be writing JavaScript inside of your HTML files. Instead, you'll typically have a couple of external JavaScript files. One of them is called a spec file (short for specification), and will contain all of your tests. The other will be the code that you're actually testing. So a more standard way to write the HTML might look like this:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Our First Jasmine Tests</title>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.0.0/jasmine.css" rel="stylesheet" />
</head>
<body>
  <div id="jasmine"></div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.0.0/jasmine.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.0.0/jasmine-html.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.0.0/boot.js"></script>
  <script src="your-external-script.js"></script>
  </body>
</html>
```

When you're ready, move on to "Testing Continued."
