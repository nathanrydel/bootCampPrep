$(document).ready(function () {
  // the DOM has now loaded
});

$(function () {
  // a shorter way to wait for the DOM to load
});

document.addEventListener("DOMContentLoaded", function () {
  // a longer way to wait for the DOM to load, without jQuery.
  // jQuery's syntax is much shorter!
});

$(document).ready(function () {
  var mainElement = document.getElementById('main'); // THIS IS NOT GREAT!
});

$(document).ready(function () {
  var $mainElement = $('#main'); // THIS IS MUCH BETTER!
});