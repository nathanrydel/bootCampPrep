# Objectives
By the end of this chapter, you should be able to:

- Define essential terms like HTTP, IP, DNS, and Idempotent
- Describe each component of a URL

## Introduction
As we continue to talk about additional concepts in web development, it becomes increasingly important to understand what is going on from a high level. The goal of this chapter is to give you a strong fundamental understanding of how the Internet actually works. [code.org](https://www.code.org) has a great video series to get you started [here](https://www.code.org/video-competition). Watching all of the videos in this series will give you a great idea of what IP, DNS, and HTTP are, and how the Internet works from a very high level.

Before we dive deep into how the web works, there are some essential terms that we first must understand. We will be using these terms **heavily** so be sure you understand what they are before moving on.

### Important Definitions
- **Protocol** – An explicitly defined form of communication or procedure. The Internet is built on protocols which strictly define how information is sent and received on the web. Some example protocols are TCP, IP, UDP, HTTP, FTP, and POP3.
- **HTTP** – Hyper Text Transfer Protocol is a well-defined client-server protocol which allows the client to get data from the server or set data on the server. It is the protocol in use for every web site you visit online.
- **IP Address** – The Internet Protocol (IP) is the protocol that governs how data is sent across a network from one computer to another. Every computer has at least one IP address which is a unique identifier of that computer on the web.
- **DNS** – Domain Name System is a server that takes a domain name like [https://www.rithmschool.com](https://www.rithmschool.com) as input and returns an IP address as output. This is necessary for the web because computers can only make connections to IP addresses.
- **HTTP Status Code** – A numeric code that indicates the result of the HTTP request. Generally speaking 200 statuses are success, 300’s are redirects, 400’s are client-side errors, and 500’s are server-side errors.
- **DOM** – The Document Object Model is an in-memory representation of the website that can change as the user interacts with the page. This is different than the HTML response that was sent by the browser since the DOM changes on the client side as the browser takes actions on the page.
- **Idempotent** – Refers to an operation that can be repeated many times on a set of data and the state of the set of data will not change. This concept is applicable to the HTTP spec since operations like a GET request should be idempotent but a POST request is not.
- **API** – Application Programming Interface. There are many different forms of APIs, but from a high level, an API is a set of rules/tools for building software applications. There are built-in APIs that you have been using (the DOM API) and external APIs that you will be using that were built by other developers. Very commonly, APIs are built by companies to share their data with other applications like the Facebook or Twitter API. These APIs allow you as the developer to build your own applications but leverage data from other sources. You can read more about the different kinds of APIs [here](https://www.example.com/apis).

### Components of a URL
Now that we have a better vocabulary when describing how the Internet works, let’s look at another essential part of the web – URLs. A URL has different components that we must be able to identify as web developers. Let’s look at the following example:

http://www.rithmschool.com:80/users?first=elie&second=tim#main


- **Protocol** – http. http:// is the protocol (a well-defined way of exchanging information). HTTP as well as HTTPS is the most common way of exchanging information on the Internet using your browser.
- **Domain Name** – www.rithmschool.com is the domain name. A domain name is a human-readable address for your website. However, your computer must look up an IP address using a service called DNS in order to communicate with the correct computer on the internet.
- **Port** – :80 is the port. A port establishes a logical pathway for information to travel on a computer. It allows different programs on the computer to run on different ports. A valid port number can be 1 through 65535. Typically we do not have to specify the port when using websites. Sites with the protocol http default to port 80 and sites with the protocol https default to port 443.
- **Path** – /users is the path to the resource on the Web server. A path may relate to a file that the web server has in its hard drive or an abstract resource that the web server is able to create, read update or delete. These are also called routes.
- **Parameters** – first=elie&second=tim are extra parameters provided to the Web server. Parameters are a list of keys and values; the entire collection of parameters is referred to as the query string. In the above example, first is a key and second is a key. elie is the value for first and tim is the value for second. These keys can be used by the web server to change the HTTP response returned in some way. Each key-value pair in the URL is separated by a &. To indicate that the parameter string is starting, a URL has a ?.
- **Anchor** – #main is an anchor to another location on the page. An anchor represents a place on the page that the browser should scroll down to. With modern web pages, some applications have begun to use the anchor tag as a way to remember which content to display.

### Additional Resources
- [Mozilla Developer Network - What is a URL](https://developer.mozilla.org/en-US/Learn/Common_questions/What_is_a_URL)
- [Wikipedia - Uniform Resource Identifier Syntax](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier#Syntax)

When you’re ready, move on to [Request / Response Cycle](https://www.rithmschool.com/courses/intermediate-javascript-part-2/how-the-web-works-request-response-cycle)
