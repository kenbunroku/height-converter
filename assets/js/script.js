// get all the fields, button
const feet_field = document.querySelector('.feet');
const inches_field = document.querySelector('.inches');
const meters_field = document.querySelector('.meters');
const convert_button = document.querySelector('.convert');

// create a function to convert feet & inches into meters
function converter() {
  // get feet from the input
  let feet_value = feet_field.value;

  // get inches from the input
  let inches_value = inches_field.value;

  let meters = feet_value * 0.3048 + inches_value * 0.0254;
  meters = meters.toFixed(2);

  // overwrite meters
  meters_field.value = meters
}

//  add event when the button is clicked
convert_button.addEventListener('click', converter);
