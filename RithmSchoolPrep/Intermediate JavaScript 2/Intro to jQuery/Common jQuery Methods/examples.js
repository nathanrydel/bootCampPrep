// html / text / val
// To grab the innerHTML of a selected element(s) we can use the html function. To grab the innerText of a selected element(s) we can use the text function.
// For input elements, we can get the values inside of them with the val function.

$(document).ready(function () {
  $("article").html(); // innerHTML
  $("article").text(); // innerText
  $("input").val(); // value
});

// If you pass strings into these methods, they’ll work as setters instead of getters; in other words, they will set the text inside of the element to the string that is passed in.

$(document).ready(function () {
  $("article").html("<h1>Here's some large text.</h1>"); // innerHTML
  $("li").text("hi!"); // innerText
  $("input").val("new value"); // value = new value
});

// addClass / removeClass / toggleClass
// To add, remove, or toggle classes we can use the addClass, removeClass and toggleClass functions:

$(document).ready(function () {
  $("article").addClass("hidden"); // add a class
  $("article").removeClass("hidden"); // remove a class
  $("article").toggleClass("hidden"); // toggle the class (if on -> off, if off -> on)
});

// css / data / attr
// To access the styles of an element we can use the css function. To access the attributes of an element we can use the attr function. To access the data - attributes of an element we can use the data function. As with text, html, and val, these methods can be used as getters or setters.Pass in a single argument to use them as getters; pass in two to use them as setters.

$(document).ready(function () {
  $("article").css("background-color", "red");
  $("article").css("background-color"); // "red"
  $("article").attr("style", "display:flex;");
  $("article").data("id", "1");
});

// Traversing the DOM with jQuery
// find / parent / children / prev / next
// For DOM traversal we can use find, which accepts a CSS selector to find elements inside a selected element. To access the children of a selected element we can use children and to access a child’s parent element we can use parent. To find the next element in a list of siblings we can use next and to find the previous sibling we can use prev.

// Here’s a quick example:

$(document).ready(function () {
  var $childDivsInsideArticle = $("article").find("div").children();
});

// This is what makes the eq function so useful. We can use it in place of bracket notation to access elements inside of a jQuery object. Unlike bracket notation, however, the result of eq will again be a jQuery object! So code like this works just fine:

var $firstLi = $("li").eq(0);
var $secondLi = $("li").eq(1);
$firstLi.text(); // "Item 1"
$secondLi.text(); // "Item 2"

// eq also makes things easier when we want to do method chaining in jQuery (which we’ll talk about more later on).

// Adding and removing elements from the DOM;
// after / before / append / prepend
// To add elements to the DOM we can place them after a selected element or before a selected element.We can also append them to a selected element(nested at the end of an element) or prepend them to a selected element(nested at the beginning).

// When creating new elements, there are a couple of different options we can use to add attributes, text, and so on.Check out the difference between the way we create newParagraph and anotherParagraph below:

$(document).ready(function () {
  var $newParagraph = $("<p>");
  $newParagraph.text("Another article");
  $newParagraph.css("color", "red");

  var $anotherParagraph = $("<p>", {
    text: "Another approach",
    css: {
      color: "purple",
      // we have to use quotes because of the '-'
      "font-size": "2em"
    }
  });
  $("article").append($newParagraph);
  $("article").prepend($anotherParagraph);
});

// In the first case, we just create an element, then we set attributes on it in subsequent lines. In the second case, we pass two arguments into the jQuery function: the new element, and an object with the attributes we’d like to set. Both of these approaches are valid ways to use jQuery to append new elements to the DOM.

// remove / empty
// To remove elements from the DOM we can use the remove function on a selected element (or elements). If we want to just remove the content inside of the element(s), we can use the empty function.

$(document).ready(function () {
  $("article").empty(); // remove all content inside the article
  $("article").remove(); // remove the article element itself from the DOM
});

// Adding and removing events with jQuery
// on / off
// To add event listeners we can use the on function, which takes a selected element (or elements) and attaches an event listener on what has been selected. To remove event listeners we use the off function..

// Just like addEventListener, the first parameter to on or off is the name of the event followed by a callback function. The second parameter is the callback, which specifies what we want to do when the event is fired. Also similar to addEventListener, the callback has access to an event object as its first parameter. This event object has a target property which is tied to the element which triggered the event. However, this is not a jQuery object! if you want to use jQuery methods on the event target, make sure to wrap it in the jQuery function!

$(document).ready(function () {
  $("article").on("click", function (e) {
    console.log($(e.target).val()); // This works great.
    console.log(e.target.val()); // TypeError! e.target isn't a jQuery object, so doesn't have a .val method.
  });
});