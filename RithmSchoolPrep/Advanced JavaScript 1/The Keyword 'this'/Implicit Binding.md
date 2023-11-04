# Objectives:
By the end of this chapter, you should be able to:

- Explain how the keyword `this` is determined with implicit binding.
- Discuss the difference between the default and implicit binding of the keyword `this`.

## Implicit Binding
We've seen how the default binding works, but how can the keyword `this` change its value based on the surrounding context?

One option is that the function wrapping the keyword `this` is being called as a method on some object. In this case, the call-site has some parent object, and according to the implicit binding rule, `this` should refer to this parent object. Anytime you see the keyword `this`, you should check to see whether the closing function has an associated parent object when the function is called. In other words, check the call-site!

Here are a few examples:

```javascript
var friend = {
    firstName: "Ash",
    sayHi: function(){
        return this.firstName + " says hello!";
    }
};

// The keyword `this` will refer to `friend` when we invoke `sayHi`:
friend.sayHi(); // Ash says hello!

var dog = {
    name: "Whiskey",
    sleep: function() {
        return this.name + " is sleeping: zzzzz...."
    }
}

dog.sleep(); // Whiskey is sleeping: zzzzz....

var nested = {
    number: 1,
    anotherObject: {
        anotherNumber: 2,
        whatIsThis: function() {
            return this;
        }
    }
}

nested.anotherObject.whatIsThis(); // Object {anotherNumber: 2}
```

<iframe title="vimeo-player" src="https://player.vimeo.com/video/199705213?h=6e9563d60b" width="640" height="360" frameborder="0"    allowfullscreen></iframe>

When you're ready, move on to Call, Apply, and Bind.