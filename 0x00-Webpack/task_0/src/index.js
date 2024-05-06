import $ from "jquery";

$(document).ready(function() {
  var paragraph1 = $('<p>').text('Holberton Dashboard'));
  var paragraph2 = $('<p>').text('Dashboard data for the students'));
  var paragraph3 = $('<p>').text('Holberton Dashboard'));

  $('body').append(paragraph1, paragraph2, paragraph3);
)
