It’s time to build something fun with your knowledge of jQuery and AJAX! For this exercise we will be using the Giphy API! This will require you to use an API key and understand some of the documentation about the API, which you can see [here](https://github.com/Giphy/GiphyAPI).

Here is what the URL would look like for search term of “hilarious” – http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=dc6zaTOxFJmzC. You can click on this URL and see the JSON you will get back. To view this in a nicer format, we highly recommend using the [JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=en-US) chrome extension.

Your application should do the following:

- Allow the user to search for a GIF and when the form is submitted, make an AJAX request to the Giphy API and return a single GIF
- Once the Giphy API has responded with data, append the GIF to the page
- Allow the user to search for as many GIFs as they would like and keep appending them to the page
- Allow the user to remove all of the GIFs by clicking a button
Here is an example of what the application might look like:

![Project Example](https://gyazo.com/f1a248f4f04e1ab5d747f4ff84264176)

You can find a solution to this project [here](https://github.com/rithmschool/intermediate_javascript_part_2_solutions/tree/master/ajax_with_jquery).