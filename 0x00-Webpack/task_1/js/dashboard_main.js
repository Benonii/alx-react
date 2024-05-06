import $ from "jquery";
import debounce from 'lodash/debounce';


$.(document).ready( function() {
  paragraph1 = $('<p>').text('Holberton Dashboard');
  paragraph2 = $('<p>').text('Dashboard data for the students');
  button = $('<button>').text('Click here to get started');
  paragraph3 = $('<p id="count">').text('')
  paragraph4 = $('<p>').text('Copyright - Holberton School')
});

let count = 0;
function updateCounter() {
  count++;

  paragraph3.text(`${count} clicks on the button)`);
}

button.addEventListener('click', debounce(updateCounter());
