


/*
  ...........YOUR MISSION...........

  Write a program that will convert a temperature from
  fahrenheit to celsius, or from celsius to fahrenheit.

  1. In the HTML, have one input field where someone can enter
      in a temperature.
  2. Create a radio button group where Celsius or Fahrenheit 
      can be selected as the scale that the number should be 
      converted to.
  3. Create a block level element that will hold the text of the
      converted temperature. 
  4. Create a button that, when clicked, displays the converted.
  5. Create another button that, when clicked, clears any text
      in the input field.
  6. Add an event handler to the input field that checks if the 
      user pressed the enter key, and if that happens, perform
      the conversion.
  7. If the temperature is greater than 90F/32C the color of 
      the converted temperature should be red.
  8. If the temperature is less than 32F/0C the color of 
      the converted temperature should be blue.
  9. For any other temperature, the color should be green.
*/

function toCelsius (sentTemp) {
  return  (sentTemp - 32) * (5 / 9);
}

function toFahrenheit (sentTemp) {
  return (sentTemp * (9 / 5))+ 32;
}
///converting temperature based on type of input 
function determineConverter(clickEvent) {

  var optionChosen = document.getElementsByName("checked-input");
  var inputTemp = document.getElementById("temp-input").value;
  var outputId =  document.getElementById("output");
///goes through all of the Fahrenheit temperatures submitted in input and converts to Celsius 
  for (var i = 0; i < optionChosen.length; i++) {
    var origTemp = 0; // setting a variable to hold the temperature that goes through the toCelsius function
    if (optionChosen[i].checked && optionChosen[i].value === 'celsius') { // determines that C is the one chosen
      origTemp = toCelsius(inputTemp); // converts the temp input 
      //if temperature is over 32 C, then text is red
      if (origTemp > 32) { 
      outputId.style.color = "red";
      outputId.innerHTML = inputTemp + " Fahrenheit is " + origTemp + " Celsius."; 
      } // if temperature is below 0 C, then text is blue
      else if (origTemp < 0) {
      outputId.style.color = "blue";
      outputId.innerHTML = inputTemp + " Fahrenheit is " + origTemp + " Celsius."; 
      } else {
        //if temperature is anything else, then make green
        outputId.style.color = "green";
        outputId.innerHTML = inputTemp +" Fahrenheit is " + origTemp + " Celsius."; 
      } 
    } 
  } ///goes through all of the Celsius temperatures submitted in input and converts to Fahrenheit 
    for (var i = 0; i < optionChosen.length; i++) {
      var origTemp = 0;
       if (optionChosen[i].checked && optionChosen[i].value === 'fahrenheit') {
        origTemp = toFahrenheit(inputTemp);
        //if temperature is over 90 F, then text is red
          if (origTemp > 90) {
            outputId.style.color = "red";
            outputId.innerHTML = inputTemp + " Celsius is " + origTemp + " Fahrenheit.";
          } // if temperature is below  32 F, then text is blue  
          else if (origTemp < 32) {
            outputId.style.color = "blue";
            outputId.innerHTML = inputTemp + " Celsius is " + origTemp + " Fahrenheit.";
          } else { //if temperature is anything else, then make green
            outputId.style.color = "green";
            outputId.innerHTML = inputTemp + " Celsius is " + origTemp + " Fahrenheit.";
          }
       }
   }
} // creates function that clears input text field
function clearIt(text) {
 document.getElementById("temp-input").value = "";
}
// Get a reference to the button element in the DOM
var button = document.getElementById("convert-button");
console.log("button", button);
var clearButton = document.getElementById("clear-button");
console.log("clearButton", clearButton);
// Assign a function to be executed when the button is clicked
button.onclick = determineConverter;
clearButton.onclick =  clearIt; 
button.addEventListener("click", determineConverter);
clearButton.addEventListener("click", clearIt);


document.addEventListener("keyup", function (e) {
  var key = e.which || e.keyCode;
  console.log("key", key);
  if (key === 13) {
    determineConverter();
  }
})
/*function pressEnter (myfield, e) { 
  var keycode;
  if (window.event) keycode = window.event.keyCode;
   else if (e) keycode = e.which; 
   else return true;
    if (keycode === 13)  { 
      myfield.submit(); 
        return false; 
      } else return true;
       }
*/

/*for (var i = 0; i < button.length; i++) {
  button.item(i).addEventListener("click", handleSectionClick) {
    var input = document.getElementById("text-input").value;
    console.log(input);
  };
}*/
