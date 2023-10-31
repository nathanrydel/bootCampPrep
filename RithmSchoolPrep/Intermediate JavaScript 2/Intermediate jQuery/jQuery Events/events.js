// $(function () {
//   $("ul").on("click", "li", function (event) {
//     console.log("You just clicked on ", $(event.target).text());
//   });
// });

// an equivalent approach;
$(function () {
  $("ul").on("click", "li", function () {
    console.log("You just clicked on", $(this).text());
  });
});