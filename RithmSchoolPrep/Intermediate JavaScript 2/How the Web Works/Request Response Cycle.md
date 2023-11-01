# Objectives
By the end of this chapter, you should be able to:

- Explain at a high level what happens when you type https://www.rithmschool.com into your browser’s URL bar and press enter
- Identify the format of the HTTP request and response
- Diagram the request / response cycle

## HTTP Request and Response
At a high level, the HTTP spec involves a computer making a request for some information at a URL. The request goes to a web server (another computer) somewhere on the Internet. The web server handles that request and then sends back the appropriate data to the requesting computer.

Taking the example of [https://www.rithmschool.com](https://www.rithmschool.com), let’s look at what happens in a little more detail. What happens when you type that address in your browser window? What are the steps that bring you back a viewable web page? Here’s an overview:

1. **DNS Lookup** – First, the browser uses a system called a domain name server which translates human readable URLs like [https://www.rithmschool.com](https://www.rithmschool.com) into an IP address (e.g. 104.27.190.189). Once the browser has an IP address, it can make a connection to the server. IP addresses aren’t easy to remember like URLs, which is why they’re typically abstracted away from humans.

2. **HTTP GET Request** – Using Rithm School’s IP address, the browser makes a HTTP GET request to the server. The GET request contains the path, in this case /. We will talk about the GET request in more details later.

3. **Server Receives Request** – The Rithm School server receives the GET request and generates the appropriate HTML page.

4. **HTTP Response** – The HTML page is sent back to the requesting computer (the browser) via a HTTP response message. The response contains a status code, in this case 200, and a response body. The body of the HTTP response is the HTML text that will be displayed in the browser.

5. **Browser Creates DOM** – The browser will read the body of the HTTP response. The browser reads the response body from top to bottom. Starting at the `<!DOCTYPE HTML>` tag, the browser reads the response body line by line and creates an in-memory representation of the HTML document called the DOM.

6. **GET Requests for Images/Scripts/CSS** – While the browser is creating the DOM, it may encounter tags that reference other files. For example, a script tag like `<script src="main.js">` is a reference to another file on the server. In order to use the resource, the browser must make additional GET requests.

The basics of the request-response cycle are often diagrammed chronologically, with the client on the left and the server on the right:

![Request-Response Diagram](/RithmSchoolPrep/Intermediate%20JavaScript%202/How%20the%20Web%20Works/request-response.png)

In this diagram, the client first makes a request to “/”, and the server responds with a status code of 200 and some HTML. Presumably within that HTML there’s a script tag with an src attribute set to “main.js”, so the client then makes a second request. The server once again responds with a status code of 200.

### Additional Resources
- [What are the series of steps that happen when a URL is requested from the address field of a browser](https://www.quora.com/What-are-the-series-of-steps-that-happen-when-an-URL-is-requested-from-the-address-field-of-a-browser)
- [What happens when](https://github.com/alex/what-happens-when)

When you’re ready, move on to HTTP and REST
