# Objectives

By the end of this chapter, you should be able to:

- Define what AJAX is
- Use the XMLHttpRequest object to make an AJAX call
- Use the fetch API to make an AJAX call

## Key Terms

- **XHR** – this stands for XMLHttpRequest, which is an API that allows for transferring data between client and server. This API is ONLY available to scripting languages in the browser (JavaScript), so know that this is not a technology that can be used by server-side languages like Ruby, Python, Java, etc. You use the XHR object in JavaScript to communicate with a server and send/retrieve data.

- **Asynchronous** – When dealing with AJAX, you’ll be writing a lot of code that runs asynchronously. This means that you can’t guarantee that your code will run line-by-line; when you make a request to another computer, you have no control over how long it will take to get a response back, and in the meantime, your code will keep running.

- **XML** – this stands for Extensible Markup language. In some ways, XML looks similar to HTML (both use tags enclosed with brackets, for instance), but XML is primarily used to store text data.

- **AJAX** – this stands for Asynchronous JavaScript and XML. It is a set of technologies that allows for building single-page applications (applications that do not require full page refreshes to change data on the page).

## AJAX without jQuery

Before we take a look at making AJAX calls with jQuery, let’s see how it can be done without jQuery. It’s possible that you will be in an environment where you will not be using jQuery and it’s good to know how to make AJAX calls using the XHR object and the newer fetch API.

### Using the XHR object

The older, but most supported cross-browser solution is to use the XHR object to make an AJAX call. The code starts by creating an object from the XMLHttpRequest object, which exists in all browsers. We then listen for an event called `onreadystatechange`, which is what will trigger every time the `readyState` property of the XMLHttpRequest changes. Once it hits 4, the response is complete. We are also checking to make sure the HTTP code returned is OK (200), and if it is, we log out a parsed version of the JSON response.

```javascript
var XHR = new XMLHttpRequest();
XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {
      console.log(JSON.parse(XHR.responseText))
    }
};
XHR.open("GET", "https://omdbapi.com?t=titanic");
XHR.send();
```

### Using the newer fetch API

The syntax for using the XHR object isn’t very friendly, so there are many tools available that streamline the process of making AJAX requests. One newer tool is called fetch. This API is a bit more complex as it makes use of Promises, which are an alternative to callbacks when managing asynchronous code.

In the code below, we make a request and then once we get the response, we parse the JSON and then console.log the response from the server. This code is a bit more complex than above, but is much easier to work with.

```javascript
fetch('https://omdbapi.com?t=titanic').then(function(response){
    return response.json().then(function(data){
        console.log(data);
    });
});
```

## Exercises

Answer the following questions:

1. Where else have you seen ‘asynchronous’ code before? Think back to a certain section in Part I of the Intermediate JavaScript course.

2. What is XHR?
XHR stands for XMLHttpRequest, which is an API that allows for transferring data between client and server.

3. What is XML? Why do we prefer to use JSON?
XML stands for Extensible Markup language. In some ways XML looks similar to HTML (both use tags enclosed with brackets, for instance), but XML is primarily used to store text data.

4. What is AJAX?
AJAX stands for Asynchronous JavaScript and XML. It is a set of technologies that allows for building single page applications (applications that do not require full page refreshes to change data on the page). The XHR object (in JavaScript) allows
+ Asynchronous
+ JavaScript
+ And – we hope you have this one 🙂
+ XML


5. Using the XHR object, make a request to https://omdbapi.com and choose a title to search by using the query string and key of `t`.

6. Using the fetch API, make a request to https://omdbapi.com and choose a title to search by using the query string and key of `t`.

When you’re ready, move on to AJAX with jQuery.
```

Please note that the URLs provided in the text are placeholders, and you should replace them with actual URLs as needed.