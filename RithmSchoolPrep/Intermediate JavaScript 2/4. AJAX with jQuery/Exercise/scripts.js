$(function () {
  const $apiKey = "f0UxQH7s26xXBuyy5IiSibNLABYZQmCV";
  const $searchForm = $("#search-form");
  const $searchInput = $("#search-input");
  const $gifContainer = $("#gif-container");
  const $clearButton = $("#clear-button");

  $searchForm.submit(function (evt) {
    evt.preventDefault();
    const $searchTerm = $searchInput.val();
    if ($searchTerm) {
      searchGiphy($searchTerm);
    }
    $searchInput.val("");
  });

  $clearButton.click(function () {
    $gifContainer.empty();
  });

  function searchGiphy($searchTerm) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${$searchTerm}&api_key=${$apiKey}&limit=5&lang=en&bundle=messaging_non_clips`;

    $.get(url, function (response) {
      const gifData = response.data;

      gifData.forEach(function (gif) {
        const imageUrl = gif.images.fixed_height.url;
        const newGif = $("<img>").attr("src", imageUrl).addClass("gif");
        $gifContainer.append(newGif);
      });
    });
  }
});