# Objectives

By the end of this chapter, you should be able to:

- Make AJAX calls with jQuery
- Compare and contrast `.get`, `.post`, and `.getJSON`
- Understand why AJAX can sometimes not be used with many APIs
- Define Same Origin Policy, JSONP, and CORS

## AJAX with jQuery

One of the biggest benefits of using jQuery is that it gives us a set of functions to make AJAX calls more easily readable, and with less code than using the XHR object. jQuery has one major function called `$.ajax`, which can be configured to make all types of HTTP requests. In the case you do not need a great deal of configuration, jQuery provides a few shorthand functions like `$.get`, `$.getJSON`, and `$.post`, which are all based off of the `$.ajax` function. Here are some examples:

### $.ajax

The `.ajax` function accepts an object and returns a promise. Inside of the object, you must use keys like method, url, etc.

```javascript
$.ajax({
    method: "GET",
    url: "https://omdbapi.com",
    data: {
        t: 'titanic' // a key of t and a value of titanic which will look like ?t=titanic
    },
    dataType: "json" // this will add an HTTP request header of 'Accept': 'application/json'
}).then(function(response){
    console.log(response); // let's see what the response is from the OMDB API!
}).catch(function(error){
    console.log(error); // something went wrong :(
});
```

### $.get

This is simply a shorthand for what we saw above, but without the `dataType: json`.

```javascript
$.get("https://omdbapi.com?t=titanic").then(function(response){
    console.log(response);
});
```

### $.getJSON

This is simply a shorthand for what we saw above, but with the `dataType: json`.

```javascript
$.getJSON("https://omdbapi.com?t=titanic").then(function(response){
    console.log(response);
});
```

### $.post

If we want to make a POST request to a server (e.g. if we want to send data to it), we can either change the method with `.ajax` or use `.post`. The second parameter is the data we want to send to a server.

```javascript
$.post("https://someapi.com", {name: "new user"}).then(function(response){
    console.log(response);
});
```

### Promises

In the examples above, we are using the `.then` function, which takes in a callback. When you see some code with a `.then` in it, you can be reasonably confident that a promise is involved, and that the function inside of the `.then` won't execute until your AJAX request has received a response.

In JavaScript, we have the ability to create our own promises using the Promise constructor. The idea behind a promise is that we execute some code that will run at some (often unknown) time in the future.

Here is what `$.ajax` looks like with callbacks:

```javascript
$.ajax({
    method: "GET",
    url: "https://omdbapi.com",
    data: {
        t: 'titanic' // a key of t and a value of titanic which will look like ?t=titanic
    },
    dataType: "json",
    success: function(response){
        console.log(response);
    },
    error: function(error){
        console.log(error);
    }
});
```

Here is what `$.ajax` looks like with promises:

```javascript
$.ajax({
    method: "GET",
    url: "https://omdbapi.com",
    data: {
        t: 'titanic' // a key of t and a value of titanic which will look like ?t=titanic
    },
    dataType: "json"
}).then(function(response){
    console.log(response);
}).catch(function(error){
    console.log(error);
});
```

While these two examples do not look very different, there are a few advantages to using promises, which we'll get into later in the course.

## Same Origin Policy, JSONP, and CORS

If AJAX is so simple to use, why don't we use it to make all of our requests? Why bother ever reloading the page? One of the biggest reasons is that they can be a violation of the Same Origin Policy. The same-origin policy is a very important concept in web security.

The Same Origin Policy states that a web browser permits scripts contained in one web page to access data in a second web page, but only if both web pages have the same origin. An origin is defined as a combination of URI scheme, host name, and port number. This policy prevents a malicious script on one page from obtaining access to sensitive data on another web page, but it also limits our ability to make AJAX calls.

There are a couple ways to try to get around the Same Origin Policy, but if a server does not allow for it, you will not be able to make AJAX calls to it. The first is a tactic called JSONP, which allows a page to receive JSON data from a different domain by adding a <script> element to the page which loads a JSON response with a callback from a different domain.

JSONP is a bit of a hack, but it does work with some APIs and is easy to configure with jQuery. Here is an example of the iTunes lookup API that can use JSONP. If you want to test this code, put it in the Chrome console on a website that already had jQuery loaded (e.g. https://jquery.org).

```javascript
$.ajax({
    url: "https://itunes.apple.com/us/lookup?id=995535015"
}).then(function(data) {
    console.log(data)
});

// XMLHttpRequest cannot load https://itunes.apple.com/us/lookup?id=995535015. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'https://jquery.org' is therefore not allowed access.

$.ajax({
    url: "https://itunes.apple.com/us/lookup?id=995535015",
    jsonp: "callback",
    dataType: "jsonp"
}).then(function(data) {
    console.log(data)
});

// Works great!
```

Now let's take a look at the error message when you don't use JSONP:

"XMLHttpRequest cannot load https://itunes.apple.com/us/lookup?id=995535015. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'https://jquery.org' is therefore not allowed access."

What this error message is telling us is that here no header for Access-Control-Allow-Origin. This header enables a technology called CORS.

Some servers will enable Cross-origin resource sharing, or CORS, so that anyone can request resources from that server. If the server responds with a header for Access-Control-Allow-Origin and the value of the header contains the origin where the request is coming from, then it will allow JavaScript to be run!

You can read more about CORS [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).

However, many APIs do not enable CORS, which can make using AJAX unfeasible, and JSONP will

 not work as well. This is especially true when these APIs contain secure or sensitive information. In these cases, if you want to make an AJAX request, you'd probably need to make one to one of your own servers, which could then make a request to the server you're interested in.

When you're ready, move on to AJAX Exercises.