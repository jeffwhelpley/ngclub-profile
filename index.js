// Import stylesheets
import './style.css';

// this our function that will
// run when we click the button
function sayHi() {
  alert('Hi, my name is Jeff. How are you?');
}

// here we add our function to the click event
// on our button
var mybutton = document.querySelector('.mybutton');
mybutton.addEventListener('click', sayHi);
