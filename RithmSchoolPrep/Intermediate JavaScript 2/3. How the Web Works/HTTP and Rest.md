# Objectives
By the end of this chapter, you should be able to:

- Explain what HTTP is and what HTTP headers are
- Use curl to make HTTP requests and include headers and data
- Compare and contrast HTTP verbs and status codes
- Define REST and explain what a RESTful API is

## HTTP Format
Before we talk about making HTTP requests, let’s review once again what HTTP is. HTTP is a protocol (means of communication) between servers and browsers. HTTP is the underlying protocol used by the web, and it defines how information is transmitted. It also specifies how servers and browsers should interact. In HTTP, we have requests that are issued by clients (and sometimes servers) to other servers. Those servers then issue a response back to the originator of the request.

When we issue an HTTP request, we specify the URL that we are making a request to and we can pass additional meta-information to the request by using headers. You can learn more about headers [here](https://example.com/headers-link). Request headers can include information about:

- Sending cookies to the server
- Caching information
- Data types that are ok to be sent (json/html/xml)
- Browser information (Name/Version)

The same way that we send HTTP headers in a request, we also receive HTTP headers in a response. Response headers can include information about:

- Caching information
- The server issuing the response
- Attaching a cookie in the browser
- The data type being sent (json/html/xml)

Now let’s understand the HTTP request and response in more detail. To make sample HTTP requests, we will use the curl command line tool which allows us to issue HTTP requests from the terminal. The `curl` command accepts quite a few flags including:

- `-v` – for additional information
- `-H` – for adding request headers
- `-I` – including response headers
- `-X` – for picking an HTTP verb
- `-d` – for passing data in the request

You can learn more about curl and useful flags [right here](https://example.com/curl-link). There are more friendly tools to make HTTP requests like Postman and HTTPie, but we will start with the basics with `curl` as it is a valuable tool to teach the fundamentals.

### curl command

Let’s make a request to [https://www.rithmschool.com](https://www.rithmschool.com) using `curl` and add some request headers:

```shell
curl -v 'https://www.rithmschool.com/' \
     -H 'accept-encoding: gzip, deflate, sdch, br' \
     -H 'accept-language: en-US,en;q=0.8' \
     -H 'upgrade-insecure-requests: 1' \
     -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36' \
     -H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8' \
     -H 'authority: www.rithmschool.com' --compressed
```

You can copy this command and paste it anywhere in the terminal and press enter. You should see the following information:

#### HTTP Request

First – we see the request headers:

```
GET / HTTP/1.1
Host: www.rithmschool.com
accept-encoding: gzip, deflate, sdch, br
accept-language: en-US,en;q=0.8
upgrade-insecure-requests: 1
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36
accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
authority: www.rithmschool.com
```

#### HTTP Response

We then see the response headers and the full response:

```
HTTP/1.1 200 OK
Date: Wed, 26 Oct 2016 14:38:55 GMT
Content-Type: text/html; charset=utf-8
Transfer-Encoding: chunked
Connection: keep-alive
Set-Cookie: __cfduid=dc463a8265a523ae34244e656361ef2a11477492735; expires=Thu, 26-Oct-17 14:38:55 GMT; path=/; domain=.rithmschool.com; HttpOnly
X-Frame-Options: SAMEORIGIN
X-Xss-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Cache-Control: max-age=0, private, must-revalidate
Set-Cookie: _rithm-app_session=RlZ3T2F3Q0ZMYmFIRVBXeVJQMUZzbkY3R1lVSjNqSUxiL3JJR0t6NWZqWFdwdk9XanJzek9HZzBvb1RUUkN4U05ZWmZTTUttb045aUlLT1FmSUlySmYyalT4...
```

Notice the format of the request and the response. The HTTP request has the following format:

- Request-Line
- 1 or more headers
- CRLF (new line)
- [ message-body ]

and the response has the following format:

- Status-Line
- 1 or more headers
- CRLF (new line)
- [ message-body ]

We call this entire process (an HTTP request being made and an HTTP response being issued), the request/response cycle.

## HTTP Verbs
Another very important part of HTTP is that when we make a request, we specify the type of HTTP verb that we want to use. There are quite a few HTTP verbs, but here we’ll cover only the most common ones. Different verbs serve different purposes, and only some of them are idempotent. (Remember what this word means? An idempotent operation is one that will repeatedly produce the same result.)

- GET – An idempotent operation that is designed for getting data from the server.
- POST – A non idempotent operation that can create data on the server or otherwise modify data.
- PUT – Technically idempotent, but commonly used for updating data that already exists on the server.
- PATCH – Non idempotent and also used for modifying data on the server. ([Read this](https://example.com/patch-link) for details on why PATCH is not classified as idempotent.)
- DELETE – Deletes data from the server