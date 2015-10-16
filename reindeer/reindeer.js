var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("reindeer");

var output = "";

/*
  YOUR ASSIGNMENT
  ----------------------------------------
  Loop through all the reindeer in the array, and add the 
  name of the reindeer to the single HTML <div> element provided.
  The name of the reindeer should be prepended with the corresponding
  color from the other array.
  
  For example:
    Blue Dasher
    Red Dancer
    etc..
*/


/*<h1 style = "color: blue "> <div> blue reindeer </div>*/




for (var i = 0; i < reindeer.length; i++) {
  var currentReindeer = reindeer[i];
  var currentColor = colors[i];

  output = output + "<h1 style = 'color:"+ currentColor + "'>";
  output = output + "<div>";
  console.log(currentColor)
  console.log(currentReindeer)
  output = output + currentColor + " " + currentReindeer;
  console.log(output)
  output = output + "</div>";

};
console.log(output);
 hohohoElement.innerHTML = output;
