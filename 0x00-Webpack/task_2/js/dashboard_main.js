import $ from "jquery";
import debounce from 'lodash/debounce';


$(document).ready(function() {
  paragraph1 = $('<p>').text('Holberton Dashboard');
  paragraph2 = $('<p>').text('Dashboard data for the students');
  button = $('<button>').text('Click here to get started');
  paragraph3 = $('<p id="count">').text('')
  paragraph4 = $('<p>').text('Copyright - Holberton School')

  let count = 0;
  function updateCounter() {
    count++;

    paragraph3.text(`${count} clicks on the button)`);
  }

  button.addEventListener('click', debounce(updateCounter()));

  const logo = document.createElement('div')
  logo.id = 'logo';
  logo.style.width = '200px';
  logo.style.height = '200px';
  
  $(body).append(logo, paragraph1, paragraph2, button, paragraph3, paragraph4);

  $('logo').style.backgroundImage = "url('../assets/holberton-logo.jpg')";
});
